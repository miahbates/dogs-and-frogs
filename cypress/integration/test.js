beforeEach(() => {
  cy.task("resetDb");
});

it("can get homepage", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/",
    },
    []
  ).as("getHome");
});

it("can get signup page", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/signup",
    },
    []
  ).as("getSignUp");
});

it("can get login page", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/login",
    },
    []
  ).as("getLogIn");
});

it("user is redirected to a populated newsfeed page immediately after sign up with new cookie", () => {
  const username = Math.random().toString(36).slice(6);
  const email = Math.random().toString(36).slice(6);
  const password = Math.random().toString(36).slice(6);
  cy.visit("/");
  cy.get("#sign-up").click();
  cy.url().should("include", "/signup");
  cy.get("form").find("input[name='username']").type(`User${username}`);
  cy.get("form").find("input[name='email']").type(`user${email}@gmail.com`);
  cy.get("form").find("input[name='password']").type(`pword${password}123`);
  cy.get("form").find("button[type='submit']").click();
  cy.url().should("include", "/newsfeed");
  //checks that the two initial posts have been added to page from db
  cy.get("ul").find(".post").should("have.length", 2);
  cy.getCookie("sid").should("have.property", "httpOnly", true);
});

it("user cannot access newsfeed without a valid cookie", () => {
  cy.visit("/");
  cy.clearCookies();
  cy.request({
    url: "/newsfeed",
    failOnStatusCode: false,
  })
    .then((response) => {
      return expect(response.status).to.eq(401);
    })
    .get("#log-in")
    .click();
});

it("user cannot access profile without a valid cookie", () => {
  cy.visit("/");
  cy.clearCookies();
  cy.request({
    url: "/profile",
    failOnStatusCode: false,
  })
    .then((response) => {
      return expect(response.status).to.eq(401);
    })
    .get("#log-in")
    .click();
});

it("can display 404 if page not found", () => {
  cy.request({ url: "/page-not-found", failOnStatusCode: false }).should(
    (response) => {
      expect(response.status).to.eq(404);
    }
  );
});

it("user cannot sign up without an @sign in their email", () => {
  cy.visit("/");
  cy.get("#sign-up").click();
  cy.url().should("include", "/signup");
  cy.get("form").find("input[name='username']").type(`User99`);
  cy.get("form").find("input[name='email']").type(`noAtsignInEmail.com`);
  cy.get("form").find("input[name='password']").type(`pwordfbh123`);
  cy.get("form").find("button[type='submit']").click();
  cy.url().should("include", "/");
});

it("user cannot sign up without number in their password", () => {
  cy.visit("/");
  cy.get("#sign-up").click();
  cy.url().should("include", "/signup");
  cy.get("form").find("input[name='username']").type(`User99`);
  cy.get("form").find("input[name='email']").type(`user99@gmail.com`);
  cy.get("form").find("input[name='password']").type(`nonumberinpword`);
  cy.get("form").find("button[type='submit']").click();
  cy.url().should("include", "/");
});

it("user can log back in after they log out", () => {
  const username = Math.random().toString(36).slice(6);
  const email = Math.random().toString(36).slice(6);
  const password = Math.random().toString(36).slice(6);
  cy.visit("/");
  cy.get("#sign-up").click();
  cy.url().should("include", "/signup");
  cy.get("form").find("input[name='username']").type(`User${username}`);
  cy.get("form").find("input[name='email']").type(`${email}@gmail.com`);
  cy.get("form").find("input[name='password']").type(`pword${password}123`);
  cy.get("form").find("button[type='submit']").click();
  cy.url().should("include", "/newsfeed");

  cy.get("form").find("#log-out").click();
  cy.url().should("include", "/");

  cy.wait(500);
  cy.get("#log-in").click();
  cy.get("form").find("input[name='email']").type(`${email}@gmail.com`);
  cy.get("form").find("input[name='password']").type(`pword${password}123`);
  cy.get("form").find("button[type='submit']").click();

  cy.url().should("include", "/newsfeed");
  cy.getCookie("sid").should("have.property", "httpOnly", true);
});
