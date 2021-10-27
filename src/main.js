// Copyright (c) 2021 Telltale Games. All rights reserved.
// See LICENSE for usage, modification, and distribution terms.
const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');

const plastic_root = path.join(process.env.LOCALAPPDATA, 'plastic4');
const conf_name = "client.conf";
const conf_path = path.join(plastic_root, conf_name);

async function install_config(client_conf) {
    await fs.promises.mkdir(plastic_root, {recursive: true});
    await fs.promises.writeFile(conf_path, client_conf);
}

async function remove_config() {
    await fs.promises.unlink(conf_path);
}

try {

    const is_post = !!process.env['STATE_isPost'];
    const client_conf = core.getInput('client_conf');
    if(!is_post) {
        install_config(client_conf);
    }
    else {
        remove_config();
    }
} catch(error) {
    core.setFailed(error.message);
}
