import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { 
  Search, 
  Plus, 
  Filter, 
  Download, 
  MoreHorizontal, 
  FileText, 
  Truck,
  ShoppingCart,
  CheckCircle2,
  XCircle,
  ClipboardCheck,
  AlertCircle,
  Clock,
  RefreshCw,
  Building2,
  Phone,
  Mail,
  Eye,
  ArrowLeft
} from 'lucide-react';
import { useAuth } from '@/auth/AuthContext';

// Mock purchase order data
const mockOrders = [
  {
    id: 'PO-2025-0001',
    supplier: 'MedSource Inc',
    createdBy: 'John Smith',
    orderDate: '2025-04-01',
    deliveryDate: '2025-04-10',
    status: 'Delivered',
    totalAmount: 2450.75,
    paymentStatus: 'Paid',
    items: 12,
  },
  {
    id: 'PO-2025-0002',
    supplier: 'HeartMeds',
    createdBy: 'Sarah Jones',
    orderDate: '2025-04-05',
    deliveryDate: '2025-04-15',
    status: 'Processing',
    totalAmount: 1280.50,
    paymentStatus: 'Pending',
    items: 8,
  },
  {
    id: 'PO-2025-0003',
    supplier: 'DiaboCare',
    createdBy: 'Mike Johnson',
    orderDate: '2025-04-08',
    deliveryDate: '2025-04-20',
    status: 'Ordered',
    totalAmount: 3750.25,
    paymentStatus: 'Unpaid',
    items: 15,
  },
  {
    id: 'PO-2025-0004',
    supplier: 'GenericMeds',
    createdBy: 'Emily Clark',
    orderDate: '2025-04-12',
    deliveryDate: '2025-04-22',
    status: 'Pending Approval',
    totalAmount: 960.30,
    paymentStatus: 'Unpaid',
    items: 6,
  },
  {
    id: 'PO-2025-0005',
    supplier: 'RespiCare',
    createdBy: 'John Smith',
    orderDate: '2025-04-15',
    deliveryDate: '2025-04-25',
    status: 'Draft',
    totalAmount: 1845.00,
    paymentStatus: 'Unpaid',
    items: 9,
  },
  {
    id: 'PO-2025-0006',
    supplier: 'MedSource Inc',
    createdBy: 'Sarah Jones',
    orderDate: '2025-04-18',
    deliveryDate: '2025-04-28',
    status: 'Cancelled',
    totalAmount: 520.75,
    paymentStatus: 'Cancelled',
    items: 3,
  },
];

// Mock supplier data
const mockSuppliers = [
  {
    id: 1,
    name: 'MedSource Inc',
    contactPerson: 'David Miller',
    email: 'david@medsource.com',
    phone: '(555) 123-4567',
    address: '123 Pharma St, Boston, MA 02108',
    itemsSupplied: 78,
    lastOrderDate: '2025-04-18',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'HeartMeds',
    contactPerson: 'Jennifer Lee',
    email: 'jennifer@heartmeds.com',
    phone: '(555) 234-5678',
    address: '456 Cardio Ave, Chicago, IL 60601',
    itemsSupplied: 45,
    lastOrderDate: '2025-04-05',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'DiaboCare',
    contactPerson: 'Robert Thompson',
    email: 'robert@diabocare.com',
    phone: '(555) 345-6789',
    address: '789 Sugar Ln, Houston, TX 77001',
    itemsSupplied: 36,
    lastOrderDate: '2025-04-08',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'GenericMeds',
    contactPerson: 'Susan White',
    email: 'susan@genericmeds.com',
    phone: '(555) 456-7890',
    address: '101 Basic Rd, Phoenix, AZ 85001',
    itemsSupplied: 112,
    lastOrderDate: '2025-04-12',
    rating: 4.2,
  },
  {
    id: 5,
    name: 'RespiCare',
    contactPerson: 'Michael Brown',
    email: 'michael@respircare.com',
    phone: '(555) 567-8901',
    address: '202 Breath St, Denver, CO 80201',
    itemsSupplied: 28,
    lastOrderDate: '2025-04-15',
    rating: 4.6,
  },
];

// Order statuses with their badge variants
const orderStatusBadge = {
  'Delivered': { variant: 'default', icon: <CheckCircle2 className="h-3 w-3 mr-1" /> },
  'Processing': { variant: 'primary', icon: <RefreshCw className="h-3 w-3 mr-1" /> },
  'Ordered': { variant: 'secondary', icon: <ShoppingCart className="h-3 w-3 mr-1" /> },
  'Pending Approval': { variant: 'warning', icon: <Clock className="h-3 w-3 mr-1" /> },
  'Draft': { variant: 'outline', icon: <FileText className="h-3 w-3 mr-1" /> },
  'Cancelled': { variant: 'destructive', icon: <XCircle className="h-3 w-3 mr-1" /> },
};

// Payment statuses with their badge variants
const paymentStatusBadge = {
  'Paid': { variant: 'success', icon: <CheckCircle2 className="h-3 w-3 mr-1" /> },
  'Pending': { variant: 'warning', icon: <Clock className="h-3 w-3 mr-1" /> },
  'Unpaid': { variant: 'outline', icon: <AlertCircle className="h-3 w-3 mr-1" /> },
  'Cancelled': { variant: 'destructive', icon: <XCircle className="h-3 w-3 mr-1" /> },
};

const OrdersPage: React.FC = () => {
  const { hasRole } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const isManagerOrAdmin = hasRole(['Admin', 'Manager']);
  const itemsPerPage = 10;

  // Filter orders based on search term and status
  const filteredOrders = mockOrders.filter((order) => {
    // Filter by search term
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by status
    const matchesStatus = 
      orderStatusFilter === 'All' || 
      order.status === orderStatusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Pagination logic for orders
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalOrderPages = Math.ceil(filteredOrders.length / itemsPerPage);

  // Filter suppliers based on search term
  const filteredSuppliers = mockSuppliers.filter((supplier) => {
    return (
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic for suppliers
  const paginatedSuppliers = filteredSuppliers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalSupplierPages = Math.ceil(filteredSuppliers.length / itemsPerPage);

  // Reset page when changing tabs
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Get badge component for order status
  const getOrderStatusBadge = (status: string) => {
    const { variant, icon } = orderStatusBadge[status as keyof typeof orderStatusBadge] || 
                             { variant: 'default', icon: null };
    return (
      <Badge variant={variant as any} className="flex items-center">
        {icon}
        {status}
      </Badge>
    );
  };

  // Get badge component for payment status
  const getPaymentStatusBadge = (status: string) => {
    const { variant, icon } = paymentStatusBadge[status as keyof typeof paymentStatusBadge] || 
                             { variant: 'default', icon: null };
    return (
      <Badge variant={variant as any} className="flex items-center">
        {icon}
        {status}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1" onClick={() => navigate('/dashboard')} aria-label="Go back to Dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Orders Management</h1>
            <p className="text-gray-500">Manage purchase orders and suppliers</p>
          </div>
        </div>
        {isManagerOrAdmin && (
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button asChild>
              <Link to="">
                <Plus className="mr-2 h-4 w-4" />
                New Purchase Order
              </Link>
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        )}
      </div>

      <Tabs defaultValue="orders" onValueChange={handleTabChange}>
        <TabsList className="mb-4">
          <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
        </TabsList>
        
        {/* Purchase Orders Tab */}
        <TabsContent value="orders">
          {/* Search and Filter Bar */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search orders by ID or supplier..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select
                  value={orderStatusFilter}
                  onValueChange={setOrderStatusFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Pending Approval">Pending Approval</SelectItem>
                    <SelectItem value="Ordered">Ordered</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Advanced Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Purchase Orders</CardTitle>
                <CardDescription>
                  Showing {paginatedOrders.length} of {filteredOrders.length} orders
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Order Date</TableHead>
                      <TableHead>Delivery Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedOrders.length > 0 ? (
                      paginatedOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.supplier}</TableCell>
                          <TableCell>{order.orderDate}</TableCell>
                          <TableCell>{order.deliveryDate}</TableCell>
                          <TableCell>{getOrderStatusBadge(order.status)}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell className="text-right">₵{order.totalAmount.toFixed(2)}</TableCell>
                          <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" />
                                  View Invoice
                                </DropdownMenuItem>
                                {['Draft', 'Pending Approval'].includes(order.status) && isManagerOrAdmin && (
                                  <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <CheckCircle2 className="mr-2 h-4 w-4" />
                                      Approve Order
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <FileText className="mr-2 h-4 w-4" />
                                      Edit Order
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600">
                                      <XCircle className="mr-2 h-4 w-4" />
                                      Cancel Order
                                    </DropdownMenuItem>
                                  </>
                                )}
                                {order.status === 'Ordered' && (
                                  <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <Truck className="mr-2 h-4 w-4" />
                                      Mark as Received
                                    </DropdownMenuItem>
                                  </>
                                )}
                                {order.paymentStatus === 'Unpaid' && order.status !== 'Cancelled' && (
                                  <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <CheckCircle2 className="mr-2 h-4 w-4" />
                                      Mark as Paid
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                          No purchase orders found matching your search criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination for Orders */}
              {totalOrderPages > 1 && (
                <div className="flex justify-center mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: Math.min(5, totalOrderPages) }, (_, i) => {
                        let pageNumber;
                        if (totalOrderPages <= 5) {
                          pageNumber = i + 1;
                        } else if (currentPage <= 3) {
                          pageNumber = i + 1;
                        } else if (currentPage >= totalOrderPages - 2) {
                          pageNumber = totalOrderPages - 4 + i;
                        } else {
                          pageNumber = currentPage - 2 + i;
                        }
                        
                        return (
                          <PaginationItem key={i}>
                            <PaginationLink
                              isActive={pageNumber === currentPage}
                              onClick={() => setCurrentPage(pageNumber)}
                            >
                              {pageNumber}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      {totalOrderPages > 5 && currentPage < totalOrderPages - 2 && (
                        <>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => setCurrentPage(totalOrderPages)}
                            >
                              {totalOrderPages}
                            </PaginationLink>
                          </PaginationItem>
                        </>
                      )}
                      
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage(p => Math.min(totalOrderPages, p + 1))}
                          disabled={currentPage === totalOrderPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Suppliers Tab */}
        <TabsContent value="suppliers">
          {/* Search Bar for Suppliers */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search suppliers by name, contact person, or email..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {isManagerOrAdmin && (
                  <div className="flex justify-end">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Supplier
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Suppliers Table */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Suppliers</CardTitle>
                <CardDescription>
                  Showing {paginatedSuppliers.length} of {filteredSuppliers.length} suppliers
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Supplier Name</TableHead>
                      <TableHead>Contact Person</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Items Supplied</TableHead>
                      <TableHead>Last Order</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedSuppliers.length > 0 ? (
                      paginatedSuppliers.map((supplier) => (
                        <TableRow key={supplier.id}>
                          <TableCell className="font-medium">{supplier.name}</TableCell>
                          <TableCell>{supplier.contactPerson}</TableCell>
                          <TableCell>{supplier.email}</TableCell>
                          <TableCell>{supplier.phone}</TableCell>
                          <TableCell>{supplier.itemsSupplied}</TableCell>
                          <TableCell>{supplier.lastOrderDate}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span className={`font-medium ${supplier.rating >= 4.5 ? 'text-green-600' : supplier.rating >= 3.5 ? 'text-amber-600' : 'text-red-600'}`}>
                                {supplier.rating}
                              </span>
                              <span className="text-gray-500">/5</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <ShoppingCart className="mr-2 h-4 w-4" />
                                  Create Order
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Phone className="mr-2 h-4 w-4" />
                                  Contact
                                </DropdownMenuItem>
                                {isManagerOrAdmin && (
                                  <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <Building2 className="mr-2 h-4 w-4" />
                                      Edit Supplier
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <FileText className="mr-2 h-4 w-4" />
                                      View Order History
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                          No suppliers found matching your search criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination for Suppliers */}
              {totalSupplierPages > 1 && (
                <div className="flex justify-center mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: Math.min(5, totalSupplierPages) }, (_, i) => {
                        let pageNumber;
                        if (totalSupplierPages <= 5) {
                          pageNumber = i + 1;
                        } else if (currentPage <= 3) {
                          pageNumber = i + 1;
                        } else if (currentPage >= totalSupplierPages - 2) {
                          pageNumber = totalSupplierPages - 4 + i;
                        } else {
                          pageNumber = currentPage - 2 + i;
                        }
                        
                        return (
                          <PaginationItem key={i}>
                            <PaginationLink
                              isActive={pageNumber === currentPage}
                              onClick={() => setCurrentPage(pageNumber)}
                            >
                              {pageNumber}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      {totalSupplierPages > 5 && currentPage < totalSupplierPages - 2 && (
                        <>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => setCurrentPage(totalSupplierPages)}
                            >
                              {totalSupplierPages}
                            </PaginationLink>
                          </PaginationItem>
                        </>
                      )}
                      
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage(p => Math.min(totalSupplierPages, p + 1))}
                          disabled={currentPage === totalSupplierPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;