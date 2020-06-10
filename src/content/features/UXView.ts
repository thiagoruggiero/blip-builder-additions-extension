import Utils from "../../shared/Utils";
import { isBuilderLoaded } from "../Content";
import FeatureBase from "./FeatureBase";

export const USER_HEADER_SELECTOR = ".main-header-top:first-child";

export default class UXView extends FeatureBase {
    private shouldHide: string[] = [
        "#blip-chat-container",
        ".builder-header-shadow:first-child",
    ];

    private isShowingNavbar: boolean;

    public onEnableFeature(): void {
        super.onEnableFeature();
        if (isBuilderLoaded) {
            this.startAsync();
        }
    }

    public onDisableFeature(): void {
        super.onDisableFeature();
        this.stopAsync();
    }

    public onLoadBuilder(): void {
        this.startAsync();
    }

    public onUnloadBuilder(): void {
        super.onUnloadBuilder();
        this.stopAsync();
    }

    private async stopAsync(): Promise<void> {
        console.log('stop UX mode');
        this.isShowingNavbar = false;
    }

    private async startAsync(): Promise<void> {
        if (!this.isEnabled) {
            return;
        }

        console.log('starta UX mode');
        const nodeTittles = Array.from(document.querySelectorAll(".builder-node-title"));
        const content = document.querySelectorAll(".contents-list");
        console.log(nodeTittles);
        nodeTittles.forEach(node => {
            node.innerHTML = "teste";
        });
    }
}