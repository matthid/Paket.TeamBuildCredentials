
"use strict";

import * as tl from "vsts-task-lib/task";
import * as fs from "fs";
import * as os from "os";
import * as tmp from "tmp";
import * as path from "path";
import { IExecOptions } from "vsts-task-lib/toolrunner";

function exitWithError(message, exitCode) {
  tl.error(message);
  tl.setResult(tl.TaskResult.Failed, message);
  process.exit(exitCode);
}

async function doMain() {
  try {
    tl.setVariable("PAKET_VSS_NUGET_ACCESSTOKEN", "");
  } catch (e) {
    exitWithError(e.message, 1);
  }
}

doMain()