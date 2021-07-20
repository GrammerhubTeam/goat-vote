
## Next.js

This is based on next's chakra/TS default

---

### Installation - NPM

When you download run `npm install`
then `npm run dev`

---

## 💻 For Windows Users

If the installation fails after you have run ``npm install``. It is important to check that you have ``node`` installed.
Also, check the version of node you have installed by running ``node --version``. 

```
IMPORTANT

DO NOT INSTALL LATEST CURRENT VERSION OF NODE. THIS VERSION OF NODE HAS EXPERIMENTAL CHANGES OR PACKAGES THAT ARE NOT
CURRENTLY STABLE FOR DEVELOPMENT. PLEASE INSTALL VERSION OF NODE 14.17.3 LTS OR BELOW FOR NODE TO WORK ON WINDOWS.
```

### Troubleshooting
If you have trouble running node-sass under your windows machine or virtual environment. Follow these steps:

1. Run npm install --global --production windows-build-tools@4.0.0
2. Rename python.exe to python2.exe in %USERPROFILE%\.windows-build-tools\python27
3. Make sure that %USERPROFILE%\INSTALLATION_PATH\python27 is part of your PATH environment variable 
   (this is what windows-build-tools should already do for you)
4. Download Visual Studio 2017 Build Tools
5. Tell npm to use VS 2017 ```npm config set msvs_version 2017 --global```
6. Run the script ```node-gyp configure --msvs_version=2017```


### Jira Board

https://grammerhub.atlassian.net/jira/software/projects/VOTE/boards/2
