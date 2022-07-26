/* eslint-disable @typescript-eslint/no-unused-expressions */
import {Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FuseCardComponent } from '@fuse/components/card';
import { InventoryProduct } from 'app/modules/dashboard/admin/apps/add-store/inventory/inventory.types';
// import { InventoryProduct } from 'app/modules/managhall/addgoods/addgoods/inventory.types';
import SwiperCore, { FreeMode, Navigation, Thumbs} from 'swiper';
// import { HomeService } from './home.service';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls    : ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{

    @ViewChildren(FuseCardComponent, {read: ElementRef}) private _fuseCards: QueryList<ElementRef>;
    thumbsSwiper: any;
    filters: string[] = ['all', 'sofa', 'room', 'roomfamily'];
    numberOfCards: any = {};
    selectedFilter: string = 'all';
    items = ['4','5','6','3'];
    products: InventoryProduct[];
    /**
     * Constructor
     */
    constructor(private _renderer2: Renderer2,
       )
    {
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
     // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
     ngOnInit(): void {
         //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
         //Add 'implements OnInit' to the class.
        // this.homeservice.getProducts().subscribe((res)=>{
        //     this.products = res['products'];
        //     console.log(this.products);
        // });

    }
    /**
     * After view init
     */
     // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
     ngAfterViewInit(): void
    {
        // Calculate the number of cards
        this._calcNumberOfCards();

        // Filter the cards for the first time
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On filter change
     *
     * @param change
     */
    onFilterChange(change: MatButtonToggleChange): void
    {
        // Set the filter
        this.selectedFilter = change.value;

        // Filter the cards
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _calcNumberOfCards(): void
    {
        // Prepare the numberOfCards object
        this.numberOfCards = {};

        // Prepare the count
        let count = 0;

        // Go through the filters
        this.filters.forEach((filter) => {

            // For each filter, calculate the card count
            if ( filter === 'all' )
            {
                count = this._fuseCards.length;
            }
            else
            {
                count = this.numberOfCards[filter] = this._fuseCards.filter(fuseCard => fuseCard.nativeElement.classList.contains('filter-' + filter)).length;
            }

            // Fill the numberOfCards object with the counts
            this.numberOfCards[filter] = count;
        });
    }

    /**
     * Filter the cards based on the selected filter
     *
     * @private
     */
    private _filterCards(): void
    {
        // Go through all fuse-cards
        this._fuseCards.forEach((fuseCard) => {

            // If the 'all' filter is selected...
            if ( this.selectedFilter === 'all' )
            {
                // Remove hidden class from all cards
                fuseCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else
            {
                // If the card has the class name that matches the selected filter...
                if ( fuseCard.nativeElement.classList.contains('filter-' + this.selectedFilter) )
                {
                    // Remove the hidden class
                    fuseCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else
                {
                    // Add the hidden class
                    fuseCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
}


