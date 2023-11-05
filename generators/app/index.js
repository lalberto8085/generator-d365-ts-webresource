import Generator from "yeoman-generator";

export default class extends Generator {
  namespace = undefined;
  filename = "ClientHooks";

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "namespace",
        message: "Client Name/Identifier",
      },
      {
        type: "input",
        name: "filename",
        message: "Compiled Web Resource Name",
        default: this.filename,
      },
    ]);

    this.namespace = answers.namespace;
    this.filename = answers.filename;

    this.log(this.namespace);
    this.log(this.filename);
  }

  async writing() {
    this.copyRootFiles();
    this.copyCodeFiles();
    this.copyServices();
  }

  copyRootFiles() {
    this.fs.copy(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath(".prettierrc.json"),
      this.destinationPath(".prettierrc.json")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copyTpl(
      this.templatePath("webpack.common.js"),
      this.destinationPath("webpack.common.js"),
      {
        filename: this.filename,
        clientName: this.namespace,
      }
    );
    this.fs.copy(
      this.templatePath("webpack.dev.js"),
      this.destinationPath("webpack.dev.js")
    );
    this.fs.copy(
      this.templatePath("webpack.prod.js"),
      this.destinationPath("webpack.prod.js")
    );
  }

  copyCodeFiles() {
    this.sourceRoot("/templates/src");
    this.destinationRoot("/src");

    this.fs.copy(
      this.templatePath("index.ts"),
      this.destinationPath("index.ts")
    );
    this.fs.copy(
      this.templatePath("/Form/AccountForm.ts"),
      this.destinationPath("/Form/AccountForm.ts")
    );
    this.fs.copy(
      this.templatePath("/Ribbon/AccountRibbon.ts"),
      this.destinationPath("/Ribbon/AccountRibbon.ts")
    );
  }

  copyServices() {
    this.sourceRoot("/templates/src/services");
    this.destinationRoot("/src/services");

    this.fs.copy(
      this.templatePath("EnvVarUtils.ts"),
      this.destinationPath("EnvVarUtils.ts")
    );

    this.fs.copy(
      this.templatePath("FlowUtils.ts"),
      this.destinationPath("FlowUtils.ts")
    );
  }
}
