﻿import {TsSimpleAst} from "./../TsSimpleAst";
import {EnumDefinition} from "./../definitions";
import {expect} from "chai";

describe(nameof(TsSimpleAst), () => {
    describe(`#${nameof<TsSimpleAst>(ast => ast.createSourceFileFromText)}`, () => {
        it("", () => {
            const ast = new TsSimpleAst();
            const sourceFile = ast.createSourceFileFromText("MyFile.ts", "enum MyEnum {}\nlet myEnum: MyEnum;\nlet myOtherEnum: MyNewEnum;");
            const enumDef = sourceFile.getEnums()[0];
            enumDef.setName("NewName");
            const addedEnum = sourceFile.addEnum({
                name: "MyNewEnum"
            });
            addedEnum.setName("MyOtherNewName");
            /*console.log(.getCompilerNode().getText());*/
            expect(sourceFile.getText()).to.equal("enum NewName {}\nlet myEnum: NewName;\nlet myOtherEnum: MyOtherNewName;\nenum MyOtherNewName {\n}\n");
        });
    });
});