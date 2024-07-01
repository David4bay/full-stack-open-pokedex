
# Exercise 11.1 - Creating a CI/CD pipeline for a Django Application 🏄

- [Linter](#linter-✍️)

- [Testing](#testing-🧪)

- [Building](#building-🧰)

## Linter ✍️

Building a Django web application that goes through a CI/CD process requires a linter that can also run along with tests when pushing/pulling to our GitHub remote repo, a very good example is using the flake8 linter, we can integrate it into our project using the command:

`
pip install flake8
`

We can configure our linter using a configuration file named `.flake8` in the root of our project. We can use a simple configuration like:

`
max-line-length = 120
exclude = .venv,venv,env,migrations,__pycache__
`

This config prevents our virtual environment, migrations and environment variable from being linted while setting a max-length for our code per line.

Finally, we can run our linter with the command:

`
flake8 .
`

Finally we can integrate our linter with the Python Git pre-commit package, this helps to run our linter before each commit:

`
pip install pre-commit
`

Finally we can create a `.pre-commit-config.yaml` file that we can place in our `.github` folder that run our actioons with instructions on how to run our linter.

## Testing 🧪

For our test, we can go with Pytest, this will work in our virtual environment we use to develop when building our Django application, we can install Pytest with the command:

`
pip install pytest
`

Configuring pytest means we have to create a pytest.ini file that pytest can use to define its testing parameters.
We can then define tests in a `tests` folder in the root of our Django Project directory.

Lastly, since we're working in a CI/CD configuration, we can create a `django.yaml` file in our `.github` folder that will run the test based on when we push or pull our code to our remote github repo.

## Building 🧰

To build the Django application for a CI/CD setup requires going to github and setting up GitHub Actions and creating a workflow, this will involve creating a yaml file or two that will run depending on a set of conditions that we have defined in our yaml configuration.

The yaml configuration file makes sure our linter(which in this case is flake8) and tests run and pass before code is merged to the main branch, this prevents merge-conflicts, this also makes sure our django project is in working condition at all times and this can also spot errors in our code.

## Alternatives Beside Jenkins and GitHub Actions

TravisCI is an alternative cloud based CI/CD service that can be integrated with GitHub, it supports Python and Django. 
The configuration is also similar to setting up a Github action where we'll create a yaml file that sets up a testing, linting pipeline that has to be ran before our code is merged to our main branch.

## Would the alternative CI setup be better in a self-hosted or cloud based environment?

Since TravisCI is a cloud based CI solution then it has to be run and managed by the cloud service it provides, this means less control over the cloud environment we run our pipeline in but at the same time since TravisCI is a pay-as-you-go service it can cut costs when the service is not being used instead of having a self-hosted server running when it's not being used.