﻿import {expect} from "chai";
import {ClassDeclaration, MethodDeclaration, PropertyDeclaration} from "./../../../compiler";
import {getInfoFromText} from "./../testHelpers";

describe(nameof(ClassDeclaration), () => {
    describe(nameof<ClassDeclaration>(d => d.getInstanceMethodDeclarations), () => {
        describe("no methods", () => {
            it("should not have any methods", () => {
                const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\n}\n");
                expect(firstChild.getInstanceMethodDeclarations().length).to.equal(0);
            });
        });

        describe("has methods", () => {
            const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nmethod1() {}\nmethod2() {}\n}\n");

            it("should get the right number of methods", () => {
                expect(firstChild.getInstanceMethodDeclarations().length).to.equal(2);
            });

            it("should get a method of the right instance of", () => {
                expect(firstChild.getInstanceMethodDeclarations()[0]).to.be.instanceOf(MethodDeclaration);
            });
        });
    });

    describe(nameof<ClassDeclaration>(d => d.getInstancePropertyDeclarations), () => {
        describe("no properties", () => {
            it("should not have any properties", () => {
                const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\n}\n");
                expect(firstChild.getInstancePropertyDeclarations().length).to.equal(0);
            });
        });

        describe("has properties", () => {
            const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nprop2: number;method1() {}\n}\n");

            it("should get the right number of properties", () => {
                expect(firstChild.getInstancePropertyDeclarations().length).to.equal(2);
            });

            it("should get a property of the right instance of", () => {
                expect(firstChild.getInstancePropertyDeclarations()[0]).to.be.instanceOf(PropertyDeclaration);
            });
        });
    });

    describe(nameof<ClassDeclaration>(d => d.getStaticMethodDeclarations), () => {
        describe("no static methods", () => {
            it("should not have any static methods", () => {
                const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\n}\n");
                expect(firstChild.getStaticMethodDeclarations().length).to.equal(0);
            });
        });

        describe("has static methods", () => {
            const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nmethod1() {}\nmethod2() {}\n}\n");

            it("should get the right number of static methods", () => {
                expect(firstChild.getStaticMethodDeclarations().length).to.equal(1);
            });

            it("should get a method of the right instance of", () => {
                expect(firstChild.getStaticMethodDeclarations()[0]).to.be.instanceOf(MethodDeclaration);
            });
        });
    });

    describe(nameof<ClassDeclaration>(d => d.getStaticPropertyDeclarations), () => {
        describe("no static properties", () => {
            it("should not have any properties", () => {
                const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\n}\n");
                expect(firstChild.getStaticPropertyDeclarations().length).to.equal(0);
            });
        });

        describe("has static properties", () => {
            const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nprop2: number;method1() {}\n}\n");

            it("should get the right number of static properties", () => {
                expect(firstChild.getStaticPropertyDeclarations().length).to.equal(1);
            });

            it("should get a property of the right instance of", () => {
                expect(firstChild.getStaticPropertyDeclarations()[0]).to.be.instanceOf(PropertyDeclaration);
            });
        });
    });

    describe(nameof<ClassDeclaration>(d => d.getInstanceMembers), () => {
        const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nprop2: number;method1() {}\n}\n");
        it("should get the right number of instance members", () => {
            expect(firstChild.getInstanceMembers().length).to.equal(3);
        });
    });

    describe(nameof<ClassDeclaration>(d => d.getStaticMembers), () => {
        const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nprop2: number;method1() {}\n}\n");
        it("should get the right number of static members", () => {
            expect(firstChild.getStaticMembers().length).to.equal(2);
        });
    });

    describe(nameof<ClassDeclaration>(d => d.getAllMembers), () => {
        const {firstChild} = getInfoFromText<ClassDeclaration>("class Identifier {\nstatic prop2: string;\nstatic method() {}\nprop: string;\nprop2: number;method1() {}\n}\n");
        it("should get the right number of instance and static members", () => {
            expect(firstChild.getAllMembers().length).to.equal(5);
        });
    });
});
