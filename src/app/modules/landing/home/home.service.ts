import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { InventoryPagination, InventoryProduct } from 'app/modules/dashboard/manage-hall/add-goods/inventory/inventory.types';

@Injectable({
    providedIn: 'root'
})
export class HomeService
{
    // Private
    private _product: BehaviorSubject<InventoryProduct | null> = new BehaviorSubject(null);
    private _products: BehaviorSubject<InventoryProduct[] | null> = new BehaviorSubject(null);
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for product
     */
    get product$(): Observable<InventoryProduct>
    {
        return this._product.asObservable();
    }

    /**
     * Getter for products
     */
    get products$(): Observable<InventoryProduct[]>
    {
        return this._products.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get contacts
     */
     getProducts(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
     Observable<{ pagination: InventoryPagination; products: InventoryProduct[] }>
 {
     return this._httpClient.get<{ pagination: InventoryPagination; products: InventoryProduct[] }>('api/apps/ecommerce/inventory/products', {
         params: {
             page: '' + page,
             size: '' + size,
             sort,
             order,
             search
         }
     }).pipe(
         tap((response) => {
             this._pagination.next(response.pagination);
             console.log(this._pagination);
             this._products.next(response.products);
             console.log(this._products);
         })
     );
 }

    /**
     * Get contact by id
     */
    getProductById(id: string): Observable<InventoryProduct>
    {
        return this._products.pipe(
            take(1),
            map((products) => {

                // Find the contact
                const contact = products.find(item => item.id === id) || null;

                // Update the contact
                this._product.next(contact);

                // Return the contact
                return contact;
            }),
            switchMap((product) => {

                if ( !product )
                {
                    return throwError('Could not found goods with id of ' + id + '!');
                }

                return of(product);
            })
        );
    }


    /**
     * Update the avatar of the given contact
     *
     * @param id
     * @param avatar
     */
    // uploadAvatar(id: string, avatar: File): Observable<Contact>
    // {
    //     return this.contacts$.pipe(
    //         take(1),
    //         switchMap(contacts => this._httpClient.post<Contact>('api/apps/contacts/avatar', {
    //             id,
    //             avatar
    //         }, {
    //             headers: {
    //                 // eslint-disable-next-line @typescript-eslint/naming-convention
    //                 'Content-Type': avatar.type
    //             }
    //         }).pipe(
    //             map((updatedContact) => {

    //                 // Find the index of the updated contact
    //                 const index = contacts.findIndex(item => item.id === id);

    //                 // Update the contact
    //                 contacts[index] = updatedContact;

    //                 // Update the contacts
    //                 this._contacts.next(contacts);

    //                 // Return the updated contact
    //                 return updatedContact;
    //             }),
    //             switchMap(updatedContact => this.contact$.pipe(
    //                 take(1),
    //                 filter(item => item && item.id === id),
    //                 tap(() => {

    //                     // Update the contact if it's selected
    //                     this._contact.next(updatedContact);

    //                     // Return the updated contact
    //                     return updatedContact;
    //                 })
    //             ))
    //         ))
    //     );
    // }
}
