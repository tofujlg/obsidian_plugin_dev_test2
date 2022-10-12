import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
			new Notice('Test Plugin Loaded!');
			this.addRibbonIcon("eye","Test Plugin",()=>{
				new Notice('You Clicked button!')
			})
		};

	onunload() {

	}}