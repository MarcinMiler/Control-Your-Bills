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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
