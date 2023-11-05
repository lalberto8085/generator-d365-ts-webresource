import { EnvVarHelper } from "./EnvVarUtils";

export class FlowUtils {
  public static async executeFlowFromVariableUrl<T>(envVariableName: string, parameters: T): Promise<void> {
    const varHelper = new EnvVarHelper(Xrm.WebApi);
    const url = await varHelper.getValue(envVariableName);
    return await this.executeFlowFromUrl(url, parameters);
  }

  public static async executeFlowFromUrl<T>(flowUrl: string, parameters: T): Promise<void> {
    const response = await fetch(flowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameters),
    });

    if (!response.ok) {
      throw Error(`Request Error: ${response.status} - ${response.statusText}`);
    }
  }
}
