# ci-cd-midterm
README.md

HTML/CSS Sample Project with GitHub Actions CI Pipeline and Docker Deployment

Project Overview
This repository contains a simple static website built with HTML and CSS.
The main purpose is to demonstrate a Continuous Integration (CI) pipeline using GitHub Actions, which builds, tests, lints, creates a Docker image, and pushes it to a Docker registry with support for multiple deployment environments.

---

Project Setup & Dependencies
- This is a static site — no build dependencies are required to run locally.
- To view the project, simply open `index.html` in any web browser.

---

GitHub Actions CI Pipeline
The CI pipeline is defined in `.github/workflows/ci.yml` and consists of the following stages:

1. Build Stage
   - Validates presence and formatting of HTML and CSS files.

2. Test Stage
   - Runs unit tests (at least 4) written using Jest to validate the app’s structure.

3. Lint/Static Analysis Stage
   - Runs HTML and CSS linters (HTMLHint and Stylelint).
   - Pipeline fails if linting issues are found.

4. Docker Build & Upload Stage
   - Builds a Docker image containing the static site.
   

5. Multi-Environment Deployment
   - Dev: Automatically triggered on push to `develop` branch.
   - Prod: Manually triggered via workflow dispatch or on merge to `main` branch.

---

How to Trigger the CI Pipeline
- Dev Build: Push or create a pull request to the `develop` branch.
- Prod Build: Manually trigger the workflow from the GitHub Actions tab or merge changes into the `main` branch.

---

Running the Application Locally
1. Clone the repository:

   ```bash
   git clone https://github.com/Dhyey1811/ci-cd-midterm.git

   ```

2. Open `index.html` in your preferred web browser.

---

Running the Docker Image
To pull and run the Docker image published by the CI pipeline:

```bash
# Pull the dev version of the image
docker pull dhyey1811/html-css-sample:dev

# Run the Docker container locally on port 8080
docker run -d -p 8080:80 dhyey1811/html-css-sample:dev
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.

---

Unit Tests
- Unit tests are implemented using Jest.
- Run tests locally with:

  ```bash
  npm install
  npm test
  ```









