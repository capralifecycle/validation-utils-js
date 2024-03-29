#!/usr/bin/env groovy

// See https://github.com/capralifecycle/jenkins-pipeline-library
@Library('cals') _

buildConfig([
  slack: [
    channel: '#fnf-feed',
    teamDomain: 'cals-capra'
  ],
]) {
  dockerNode {
    checkout scm

    insideToolImage('node:18') {
      stage('Install dependencies') {
        sh 'npm ci'
      }

      stage('Lint') {
        sh 'npm run lint'
      }

      stage('Tests') {
        sh 'npm test'
      }

      // We only run semantic-release on the master branch,
      // as we do not want credentials to be exposed to the job
      // on other branches or in PRs.
      //
      // To have the correct version applied to the build we need
      // to use a hook that is run during semantic-release execution.
      // For this we use the 'prepack' hook. This also ensures
      // that 'npm link' and alike builds the code, and we can
      // trigger the same hook on other branches.

      if (env.BRANCH_NAME == 'master') {
        stage('Build, verify and possibly release') {
          withSemanticReleaseEnv {
            sh 'npm run semantic-release'
          }
        }
      } else {
        stage('Build and verify') {
          sh 'npm pack'
        }
      }
    }
  }
}
