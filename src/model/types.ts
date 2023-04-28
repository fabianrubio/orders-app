export interface Order {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  PackageSize: string;
  Status: string;
  Refund: boolean;
  DestinationAddress: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    Coordinates: string;
    FirstName: string;
    LastName: string;
    Street: string;
    ZipCode: string;
    State: string;
    City: string;
    Neighbourhood: string;
    ExNumber: string;
    InNumber: string;
    PhoneNumber: string;
    OrderID: number;
  };
  Products: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    Weight: number;
    OrderID: number;
  }[];
  Message: string;
}
