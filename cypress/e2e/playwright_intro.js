/*

what is playwright?

playwright is an open-source end-to-end testing framework developed by Microsoft.
it is used for automating modern web applications across different browsers.
you can use it to test UI behavior, validate workflows , and ensure consistent functionality.

why using playwright?

cross-browser support: works with chromium, firefox, and webkit(safari engine).

Multi language support: supports JavaScript, TypeScript, Python, .Net,C#, and Java.

Headless and headed mode: it can run tests with or without a visible browser UI.

parallel execution: Faster test runs with bult-in parallelism.

Auto-waiting: automatically waits for elements to be ready before performing actions (e.g.,clickable,visible).

Network mocking: You can intercept and mock API calls.

Powerful selectors: supports CSS selectors, Xpath, text , and custom selectors like :has().

Mobile and geolocation testing: can simulate devices , geolocation , permissions, and more.

test runner included:  comes with its own test runner (Playwright Test) for quick setup and advanced reporting.

Selenium

Selenium is the oldest and most widely-used automation framework, primarily designed for testing across different browsers.
It supports multiple programming languages like Java, Python, and JavaScript,
and works with all major browsers including Chrome, Firefox, Edge, and Safari.
However, Selenium relies heavily on the browser driver (like ChromeDriver),
which can make it slower and less stable. It also requires more manual waits to handle modern web applications,
especially those using dynamic elements or SPA frameworks like React or Angular.

Cypress

Cypress is a modern JavaScript-based framework built specifically for front-end testing.
It runs directly inside the browser, giving it deep access to elements and making it very fast and interactive.
Cypress offers features like automatic waiting, time travel debugging, and a rich UI for test execution. However,
Cypress has limitations: it supports only Chrome-family and Firefox browsers,
and doesn't fully support multi-tab, *frame testing, or cross-origin requests without workarounds.
It's best suited for unit and integration testing of modern front-end applications.
*/