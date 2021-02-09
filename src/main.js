const core = require('@actions/core');
const github = require('@actions/github');

async function install_config() {
}

try {
    install_config();
} catch(error) {
    core.setFailed(error.message);
}
