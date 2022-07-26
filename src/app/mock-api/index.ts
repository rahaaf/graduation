import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { ContactsMockApi } from 'app/mock-api/apps/contacts/api';
import { ECommerceInventoryMockApi } from 'app/mock-api/apps/ecommerce/inventory/api';
import { ECommerceInventoryCopyMockApi } from 'app/mock-api/apps/ecommerce copy/inventory/api';
import { IconsMockApi } from 'app/mock-api/ui/icons/api';
import { MessagesMockApi } from 'app/mock-api/common/messages/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { SearchMockApi } from 'app/mock-api/common/search/api';
import { UserMockApi } from 'app/mock-api/common/user/api';

export const mockApiServices = [
    AuthMockApi,
    ContactsMockApi,
    ECommerceInventoryMockApi,
    ECommerceInventoryCopyMockApi,
    IconsMockApi,
    MessagesMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    SearchMockApi,
    UserMockApi
];
