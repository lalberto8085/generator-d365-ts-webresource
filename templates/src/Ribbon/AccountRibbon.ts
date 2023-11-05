
export class AccountRibbon {
    public static async alertAccountName(context: Xrm.FormContext, accountId: string) {

        const name = context.getAttribute("name")?.getValue();
        alert(`Hello ${name ?? "No Name"}`);
    }
}