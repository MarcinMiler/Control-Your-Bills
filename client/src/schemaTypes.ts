/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBillMutation
// ====================================================

export interface AddBillMutation_addBill {
  id: number;
  title: string;
  date: string;
  price: number;
}

export interface AddBillMutation {
  addBill: AddBillMutation_addBill;
}

export interface AddBillMutationVariables {
  title: string;
  price: number;
  categoryId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCategoryMutation
// ====================================================

export interface CreateCategoryMutation_createCategory {
  id: number;
  name: string;
  billsCount: number;
}

export interface CreateCategoryMutation {
  createCategory: CreateCategoryMutation_createCategory;
}

export interface CreateCategoryMutationVariables {
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BillsQuery
// ====================================================

export interface BillsQuery_bills {
  id: number;
  title: string;
  date: string;
  price: number;
}

export interface BillsQuery {
  bills: BillsQuery_bills[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesQuery
// ====================================================

export interface CategoriesQuery_categories {
  id: number;
  name: string;
  billsCount: number;
}

export interface CategoriesQuery {
  categories: CategoriesQuery_categories[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryQuery
// ====================================================

export interface CategoryQuery_category_bills {
  id: number;
  title: string;
  date: string;
  price: number;
}

export interface CategoryQuery_category {
  bills: CategoryQuery_category_bills[] | null;
}

export interface CategoryQuery {
  category: CategoryQuery_category;
}

export interface CategoryQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
