
## How to run wdio tests

To run the wdio test follow the steps given below:

1. Before running run this command to install dependencies added in `package.json` file. Also copy all the files from `package-lock.json` file. After that run the command mentioned below.
    ```shell.  
    npm install
    ```
2. Verify the path in `base_Url` variable, mentioned in the file `wdio.env.js`. The URL in this variable should be open before running the test script. Refer the portion of the code in file `wdio.env.js` below. In this verify the **base_url** path.

    ```js
    small_pause: 2000,
            medium_pause: 5000,
            long_pause: 20000,
            base_url: 'http://localhost/testing/vaahcms-ready/public',  // Verify this URL
            version: null,
            capabilities: 
            ...
    ```
    If the URL does not open, then kindly do the necessary setup with XAMPP before contuinuing.

3. After this replace the data in the file: `configuration.js`. In the file locate `db_name: 'vaahcms',` in the **this.value** section of the file and raplace **vaahcms** with the actual name of the databse.

    ```js
     this.value = {
            env_file: 'Test',
            db_name: 'vaahcms', // replace this value with actual database
            db_username: 'root',
            db_password: 'testing',
            ...
     }
    ```
4. Before running the command make sure Laravel DebugBar is disabled. If not add `DEBUGBAR_ENABLED=false` in .env file.
5. To run the tests in **headless** mode. Change the value of the `is_human` in file **wdio.env.js** to false.
6. To run all the test scripts, run the following command:
    ```shell
    npm run wdio
    ```

7. To run a specific test script for a page such as setup page, configuration page, migrate page, etc. Run the following command:
    ```shell
    npx wdio --spec ./tests/wdio/specs/setup.spec.js
    ```
    In this command, change the file name `setup.spec.js` with the desired file name which you want to run. The files are placed in the ***tests/wdio/specs*** directory.

8. If you need to run tests based on page id, group id or test id, you can use following command:
    ```shell
    npx wdio --mochaOpts.grep <page id> 
    e.g. npx wdio --mochaOpts.grep LI // This will run all the test cases under the Page with Page ID LI_1

    npx wdio --mochaOpts.grep <group id>
    e.g. npx wdio --mochaOpts.grep LI_1 // This will run all the test cases under the Group with Group ID LI_1

    npx wdio --mochaOpts.grep <test id>
    e.g. npx wdio --mochaOpts.grep LI_1_1.1 // This will run all the test cases under the Page ID LI having Group ID 1 and Test ID starting with 1.1
    ```
