
export class AccountForm {

    public static async onFormLoad(context: Xrm.Events.EventContext) {
        context.getFormContext().getAttribute("name").addOnChange(AccountForm.onNameChange);
    }

    private static onNameChange(context: Xrm.Events.EventContext) {
        const formContext = context.getFormContext();

        const name = formContext.getAttribute("name")?.getValue();
        alert(`Hello ${name ?? "No Name"}`);
    }
}