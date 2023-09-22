let params = {
    debug: true,
    is_human: false,
    is_human_pause: 2, // in seconds
    env: null,
    base_url: null,
    version: null,
};
/*
|--------------------------------------------------------------------------
| Site Environment
|--------------------------------------------------------------------------
*/
params.env = 'localhost';
//params.env = 'develop';
//params.env = 'staging';
//params.env = 'production';

switch(params.env)
{
    case 'localhost':
        params.base_url = null
        break;

    case 'develop':
        params.base_url = null
        break;

    case 'staging':
        params.base_url = null
        break;

    case 'production':
        params.base_url = null
        break;

    default:
        params.base_url = null
        break;

}


module.exports = params;