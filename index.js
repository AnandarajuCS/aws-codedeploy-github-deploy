const core = require('@actions/core');
const github = require('@actions/github');

try {
  const applicationName = core.getInput('applicationName');
  const deploymentGroupName = core.getInput('deploymentGroupName');
  const deploymentConfigName = core.getInput('deploymentConfigName');
  const computePlatform = core.getInput('computePlatform');  

  console.log('AWS CodeDeploy parameters:');
  console.log(`Application Name: ${applicationName}`);
  console.log(`Deployment Group Name: ${deploymentGroupName}`);
  console.log(`Deployment Config Name: ${deploymentConfigName}`); 
  console.log(`Compute Platform used: ${computePlatform}`);
  const time = (new Date()).toTimeString();
  core.setOutput("deploymentCreatedTime", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
