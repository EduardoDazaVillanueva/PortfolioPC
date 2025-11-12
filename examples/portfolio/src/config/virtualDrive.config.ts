import { FILE_SCHEMES, removeUrlProtocol, VirtualDriveConfig, VirtualFolder, VirtualRoot } from "prozilla-os";
import { PROJECTS } from "../constants/projects";
import { EXPERIENCE } from "../constants/experience";
import { LINKS } from "../constants/links";

function loadData(virtualRoot: VirtualRoot) {
	const userFolder = virtualRoot.navigate("~");

	if (!userFolder || !(userFolder instanceof VirtualFolder))
		return;

	userFolder.createFolder("Desktop", (desktopFolder: VirtualFolder) => {
		desktopFolder.createFolder("Projects", (projectsFolder: VirtualFolder) => {
			PROJECTS.forEach((project: { title: string; document: string; url: string }) => {
				projectsFolder.createFolder(project.title, (projectFolder: VirtualFolder) => {
					projectFolder.createFile("About", "md", (file: any) => {
						file.setSource(project.document);
					});
					projectFolder.createFile("Ver proyecto", undefined, (file: any) => {
						file.setSource(FILE_SCHEMES.external + project.url);
					});
				});
			});
		});

		desktopFolder.createFolder("Experience", (experienceFolder: VirtualFolder) => {
			EXPERIENCE.forEach((post: { title: string; document: string }) => {
				experienceFolder.createFile(post.title, "md", (file: any) => {
					file.setSource(post.document);
				});
			});
		});

		desktopFolder.createFolder("Links", (linksFolder: VirtualFolder) => {
			LINKS.forEach((link: { url: string; icon: string }) => {
				linksFolder.createFile(removeUrlProtocol(link.url), undefined, (file: any) => {
					file.setIconUrl(link.icon)
						.setSource(FILE_SCHEMES.external + link.url);
				});
			});
		});

		desktopFolder.createFile("AboutMe", "md", (file: any) => {
			file.setSource("documents/about-me.md");
		});
	});
}

export const virtualDriveConfig = new VirtualDriveConfig({
	saveData: false,
	defaultData: {
		includeDesktopFolder: false,
		includeDocumentsFolder: false,
		includePicturesFolder: false,
		includeSourceTree: false,
		includeAppsFolder: false,
		loadData,
	},
});