import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { DOCUMENT } from '@angular/common';

@Component({
    selector       : 'languages',
    templateUrl    : './languages.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'languages'
})
export class LanguagesComponent implements OnInit, OnDestroy
{
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _fuseNavigationService: FuseNavigationService,
        private _translocoService: TranslocoService,
        @Inject(DOCUMENT) private document: Document,

    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe((activeLang) => {

            // Get the active lang
            this.activeLang = activeLang;

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            'en': 'us',
            'ar': 'sy'
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void
    {
        // Set the active lang
        const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
        htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
        this._translocoService.setDefaultLang(lang);
        this._translocoService.getTranslation(lang);
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void
    {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;

        // Get the Project dashboard item and update its title
        const projectDashboardItem = this._fuseNavigationService.getItem('apps.store', navigation);
        if ( projectDashboardItem )
        {
            this._translocoService.selectTranslate('Store').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    projectDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const projectHallItem = this._fuseNavigationService.getItem('apps.add-hall', navigation);
        if ( projectHallItem )
        {
            this._translocoService.selectTranslate('Hall').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    projectHallItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        // Get the Analytics dashboard item and update its title
        const analyticsDashboardItem = this._fuseNavigationService.getItem('apps.store.add-store', navigation);
        if ( analyticsDashboardItem )
        {
            this._translocoService.selectTranslate('add-store').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    analyticsDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
           // Get the Analytics dashboard item and update its title
           const analyticsHallItem = this._fuseNavigationService.getItem('apps.add-hall.hallhouse', navigation);
           if (analyticsHallItem)
           {
               this._translocoService.selectTranslate('Hallhouse').pipe(take(1))
                   .subscribe((translation) => {
                       // Set the title
                       analyticsHallItem.title = translation;
                       // Refresh the navigation component
                       navComponent.refresh();
                   });
           }
        const contactsDashboardItem = this._fuseNavigationService.getItem('apps.contacts', navigation);
        if ( contactsDashboardItem )
        {
            this._translocoService.selectTranslate('Contacts').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    contactsDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
    }
}
