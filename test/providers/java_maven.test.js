import { expect } from 'chai'
import fs from 'fs'
import javaMvnProvider from '../../src/providers/java_maven.js'

suite('testing the maven-maven data provider', () => {
	[
		{name: 'pom.xml', expected: true},
		{name: 'some_other.file', expected: false}
	].forEach(testCase => {
		test(`verify isSupported returns ${testCase.expected} for ${testCase.name}`, () =>
			expect(javaMvnProvider.isSupported(testCase.name)).to.equal(testCase.expected)
		)
	});

	[
		"pom_deps_with_ignore_on_artifact",
		"pom_deps_with_ignore_on_dependency",
		"pom_deps_with_ignore_on_group",
		"pom_deps_with_ignore_on_version",
		"pom_deps_with_ignore_on_wrong",
		"pom_deps_with_no_ignore",
	].forEach(testCase => {
		let scenario = testCase.replace('pom_deps_', '').replaceAll('_', ' ')

		test(`verify maven data provided for stack analysis with scenario ${scenario}`, async () => {
			// load the expected graph for the scenario
			let expectedGraph = fs.readFileSync(`test/providers/tst_manifests/${testCase}/stack_expected_dot_graph`,).toString()
			// invoke sut stack analysis for scenario manifest
			let providedDataForStack = await javaMvnProvider.provideStack(`test/providers/tst_manifests/${testCase}/pom.xml`)
			// verify returned data matches expectation
			expect(providedDataForStack).to.deep.equal({
				ecosystem: 'maven',
				contentType: 'text/vnd.graphviz',
				content: expectedGraph
			})
		// these test cases takes ~2500-2700 ms each pr >10000 in CI (for the first test-case)
		}).timeout(process.env.GITHUB_ACTIONS ? 30000 : 5000)

		test(`verify maven data provided for component analysis with scenario ${scenario}`, async () => {
			// load the expected list for the scenario
			let expectedList = fs.readFileSync(`test/providers/tst_manifests/${testCase}/component_expected_list`,).toString().trim()
			// read target manifest file
			let manifestContent = fs.readFileSync(`test/providers/tst_manifests/${testCase}/pom.xml`).toString()
			// invoke sut stack analysis for scenario manifest
			let providedDataForStack = await javaMvnProvider.provideComponent(manifestContent)
			// verify returned data matches expectation
			expect(providedDataForStack).to.deep.equal({
				ecosystem: 'maven',
				contentType: 'application/json',
				content: expectedList
			})
			// these test cases takes ~1400-2000 ms each pr >10000 in CI (for the first test-case)
		}).timeout(process.env.GITHUB_ACTIONS ? 15000 : 2500)
	})
})
