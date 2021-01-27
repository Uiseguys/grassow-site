/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppRoot {
    }
    interface CImage {
        "account": string;
        "alias": string;
        "crop": string;
        "gravity": string;
        "height": number;
        "sizes": string;
        "width": number | string;
    }
    interface CSlider {
        "activeSlideIndex"?: number;
        "carouselInnerTransitionFaster"?: string;
        "collapseOnMobile"?: boolean;
        "didLoadFunc"?: Function;
        "dynamicIntervalTimeoutArray"?: Array<Array<number>>;
        "intervalExternalFunction"?: Function;
        "intervalTimeoutDuration"?: number;
        "lastArrowBlack"?: boolean;
        "loadLastSlideItemHalfway"?: boolean;
        "nextLabelFunc"?: Function;
        "noTransitions": boolean;
        "path": string;
        "prevLabelFunc"?: Function;
        "radioButtonIdOffset"?: number;
        "removeArrowNavigation"?: boolean;
        "sliderLang": string;
        "slides": number;
        "stopFirstAndLastSlideTransitions"?: boolean;
        "theme"?: boolean;
        "touchScrollable": boolean;
    }
    interface CartMenu {
        "handleCartMenuClick": Function;
        "items": Array<any>;
        "showCart": boolean;
    }
    interface CartSidebar {
        "changeQuantity": Function;
        "handleCartMenuClick": Function;
        "items": Array<any>;
        "removeItem": Function;
        "showCart": boolean;
    }
    interface CheckoutPage {
        "changeTransaction": Function;
        "history": RouterHistory;
        "items": Array<any>;
        "removeAllItems": Function;
    }
    interface LandingPage {
        "addItem": Function;
        "latestEditions": Array<any>;
        "latestNews": Array<any>;
        "latestPublications": Array<any>;
    }
    interface LayoutFooter {
    }
    interface LayoutHeader {
    }
    interface LayoutIndex {
        "description": string;
        "pageTitle": string;
    }
    interface PostsLanding {
        "addItem": Function;
        "heading": Array<any>;
        "posts": Array<any>;
        "type": string | undefined;
    }
    interface PostsPage {
        "addItem": Function;
        "post": any;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCImageElement extends Components.CImage, HTMLStencilElement {
    }
    var HTMLCImageElement: {
        prototype: HTMLCImageElement;
        new (): HTMLCImageElement;
    };
    interface HTMLCSliderElement extends Components.CSlider, HTMLStencilElement {
    }
    var HTMLCSliderElement: {
        prototype: HTMLCSliderElement;
        new (): HTMLCSliderElement;
    };
    interface HTMLCartMenuElement extends Components.CartMenu, HTMLStencilElement {
    }
    var HTMLCartMenuElement: {
        prototype: HTMLCartMenuElement;
        new (): HTMLCartMenuElement;
    };
    interface HTMLCartSidebarElement extends Components.CartSidebar, HTMLStencilElement {
    }
    var HTMLCartSidebarElement: {
        prototype: HTMLCartSidebarElement;
        new (): HTMLCartSidebarElement;
    };
    interface HTMLCheckoutPageElement extends Components.CheckoutPage, HTMLStencilElement {
    }
    var HTMLCheckoutPageElement: {
        prototype: HTMLCheckoutPageElement;
        new (): HTMLCheckoutPageElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLayoutFooterElement extends Components.LayoutFooter, HTMLStencilElement {
    }
    var HTMLLayoutFooterElement: {
        prototype: HTMLLayoutFooterElement;
        new (): HTMLLayoutFooterElement;
    };
    interface HTMLLayoutHeaderElement extends Components.LayoutHeader, HTMLStencilElement {
    }
    var HTMLLayoutHeaderElement: {
        prototype: HTMLLayoutHeaderElement;
        new (): HTMLLayoutHeaderElement;
    };
    interface HTMLLayoutIndexElement extends Components.LayoutIndex, HTMLStencilElement {
    }
    var HTMLLayoutIndexElement: {
        prototype: HTMLLayoutIndexElement;
        new (): HTMLLayoutIndexElement;
    };
    interface HTMLPostsLandingElement extends Components.PostsLanding, HTMLStencilElement {
    }
    var HTMLPostsLandingElement: {
        prototype: HTMLPostsLandingElement;
        new (): HTMLPostsLandingElement;
    };
    interface HTMLPostsPageElement extends Components.PostsPage, HTMLStencilElement {
    }
    var HTMLPostsPageElement: {
        prototype: HTMLPostsPageElement;
        new (): HTMLPostsPageElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c-image": HTMLCImageElement;
        "c-slider": HTMLCSliderElement;
        "cart-menu": HTMLCartMenuElement;
        "cart-sidebar": HTMLCartSidebarElement;
        "checkout-page": HTMLCheckoutPageElement;
        "landing-page": HTMLLandingPageElement;
        "layout-footer": HTMLLayoutFooterElement;
        "layout-header": HTMLLayoutHeaderElement;
        "layout-index": HTMLLayoutIndexElement;
        "posts-landing": HTMLPostsLandingElement;
        "posts-page": HTMLPostsPageElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface CImage {
        "account"?: string;
        "alias"?: string;
        "crop"?: string;
        "gravity"?: string;
        "height"?: number;
        "sizes"?: string;
        "width"?: number | string;
    }
    interface CSlider {
        "activeSlideIndex"?: number;
        "carouselInnerTransitionFaster"?: string;
        "collapseOnMobile"?: boolean;
        "didLoadFunc"?: Function;
        "dynamicIntervalTimeoutArray"?: Array<Array<number>>;
        "intervalExternalFunction"?: Function;
        "intervalTimeoutDuration"?: number;
        "lastArrowBlack"?: boolean;
        "loadLastSlideItemHalfway"?: boolean;
        "nextLabelFunc"?: Function;
        "noTransitions"?: boolean;
        "path"?: string;
        "prevLabelFunc"?: Function;
        "radioButtonIdOffset"?: number;
        "removeArrowNavigation"?: boolean;
        "sliderLang"?: string;
        "slides"?: number;
        "stopFirstAndLastSlideTransitions"?: boolean;
        "theme"?: boolean;
        "touchScrollable"?: boolean;
    }
    interface CartMenu {
        "handleCartMenuClick"?: Function;
        "items"?: Array<any>;
        "showCart"?: boolean;
    }
    interface CartSidebar {
        "changeQuantity"?: Function;
        "handleCartMenuClick"?: Function;
        "items"?: Array<any>;
        "removeItem"?: Function;
        "showCart"?: boolean;
    }
    interface CheckoutPage {
        "changeTransaction"?: Function;
        "history"?: RouterHistory;
        "items"?: Array<any>;
        "removeAllItems"?: Function;
    }
    interface LandingPage {
        "addItem"?: Function;
        "latestEditions"?: Array<any>;
        "latestNews"?: Array<any>;
        "latestPublications"?: Array<any>;
    }
    interface LayoutFooter {
    }
    interface LayoutHeader {
    }
    interface LayoutIndex {
        "description"?: string;
        "pageTitle"?: string;
    }
    interface PostsLanding {
        "addItem"?: Function;
        "heading"?: Array<any>;
        "posts"?: Array<any>;
        "type"?: string | undefined;
    }
    interface PostsPage {
        "addItem"?: Function;
        "post"?: any;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c-image": CImage;
        "c-slider": CSlider;
        "cart-menu": CartMenu;
        "cart-sidebar": CartSidebar;
        "checkout-page": CheckoutPage;
        "landing-page": LandingPage;
        "layout-footer": LayoutFooter;
        "layout-header": LayoutHeader;
        "layout-index": LayoutIndex;
        "posts-landing": PostsLanding;
        "posts-page": PostsPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "c-image": LocalJSX.CImage & JSXBase.HTMLAttributes<HTMLCImageElement>;
            "c-slider": LocalJSX.CSlider & JSXBase.HTMLAttributes<HTMLCSliderElement>;
            "cart-menu": LocalJSX.CartMenu & JSXBase.HTMLAttributes<HTMLCartMenuElement>;
            "cart-sidebar": LocalJSX.CartSidebar & JSXBase.HTMLAttributes<HTMLCartSidebarElement>;
            "checkout-page": LocalJSX.CheckoutPage & JSXBase.HTMLAttributes<HTMLCheckoutPageElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "layout-footer": LocalJSX.LayoutFooter & JSXBase.HTMLAttributes<HTMLLayoutFooterElement>;
            "layout-header": LocalJSX.LayoutHeader & JSXBase.HTMLAttributes<HTMLLayoutHeaderElement>;
            "layout-index": LocalJSX.LayoutIndex & JSXBase.HTMLAttributes<HTMLLayoutIndexElement>;
            "posts-landing": LocalJSX.PostsLanding & JSXBase.HTMLAttributes<HTMLPostsLandingElement>;
            "posts-page": LocalJSX.PostsPage & JSXBase.HTMLAttributes<HTMLPostsPageElement>;
        }
    }
}