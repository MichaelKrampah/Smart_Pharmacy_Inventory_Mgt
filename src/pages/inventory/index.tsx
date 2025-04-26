import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  DropdownMenuTrigger 
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
  Upload, 
  Download, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  BarChart2,
  FileText,
  Package, 
  QrCode,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '@/auth/AuthContext';

// Mock inventory data
const mockInventory = [
  {
    id: 1,
    name: 'Amoxicillin',
    category: 'Antibiotics',
    dosage: '500mg',
    form: 'Capsule',
    quantity: 245,
    minStock: 50,
    batchNo: 'AMX2023-05',
    expiryDate: '2026-04-15',
    location: 'Shelf A-12',
    supplier: 'MedSource Inc',
    price: 0.85,
    lastUpdated: '2025-04-12',
  },
  {
    id: 2,
    name: 'Lisinopril',
    category: 'Antihypertensive',
    dosage: '10mg',
    form: 'Tablet',
    quantity: 178,
    minStock: 40,
    batchNo: 'LIS2023-11',
    expiryDate: '2026-02-28',
    location: 'Shelf B-05',
    supplier: 'HeartMeds',
    price: 0.35,
    lastUpdated: '2025-04-10',
  },
  {
    id: 3,
    name: 'Insulin Glargine',
    category: 'Antidiabetic',
    dosage: '100u/ml',
    form: 'Solution',
    quantity: 18,
    minStock: 15,
    batchNo: 'INS2024-01',
    expiryDate: '2025-08-15',
    location: 'Refrigerator 2',
    supplier: 'DiaboCare',
    price: 42.99,
    lastUpdated: '2025-04-08',
  },
  {
    id: 4,
    name: 'Ibuprofen',
    category: 'NSAID',
    dosage: '400mg',
    form: 'Tablet',
    quantity: 356,
    minStock: 100,
    batchNo: 'IBU2023-09',
    expiryDate: '2026-09-30',
    location: 'Shelf C-01',
    supplier: 'GenericMeds',
    price: 0.12,
    lastUpdated: '2025-04-05',
  },
  {
    id: 5,
    name: 'Salbutamol',
    category: 'Bronchodilator',
    dosage: '100mcg',
    form: 'Inhaler',
    quantity: 12,
    minStock: 30,
    batchNo: 'SAL2023-12',
    expiryDate: '2026-01-20',
    location: 'Shelf D-08',
    supplier: 'RespiCare',
    price: 8.75,
    lastUpdated: '2025-04-08',
  },
  {
    id: 6,
    name: 'Metformin',
    category: 'Antidiabetic',
    dosage: '1000mg',
    form: 'Tablet',
    quantity: 245,
    minStock: 80,
    batchNo: 'MET2024-02',
    expiryDate: '2026-05-18',
    location: 'Shelf B-12',
    supplier: 'DiaboCare',
    price: 0.25,
    lastUpdated: '2025-04-15',
  },
  {
    id: 7,
    name: 'Atorvastatin',
    category: 'Statin',
    dosage: '20mg',
    form: 'Tablet',
    quantity: 156,
    minStock: 50,
    batchNo: 'ATO2023-10',
    expiryDate: '2026-03-15',
    location: 'Shelf C-04',
    supplier: 'HeartMeds',
    price: 0.45,
    lastUpdated: '2025-04-11',
  },
];

// Medicine categories for filtering
const categories = [
  'All Categories',
  'Antibiotics',
  'Antihypertensive',
  'Antidiabetic',
  'NSAID',
  'Statin',
  'Bronchodilator',
  'Antihistamine',
  'Analgesic',
  'Antiemetic',
];

const InventoryPage: React.FC = () => {
  const { hasRole } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof typeof mockInventory[0]; direction: 'asc' | 'desc' } | null>(null);

  const isAdmin = hasRole(['Admin']);
  const isManagerOrAdmin = hasRole(['Admin', 'Manager']);
  const itemsPerPage = 10;

  // Filter inventory based on search term and category
  const filteredInventory = mockInventory.filter((item) => {
    // Filter by search term
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.batchNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = 
      selectedCategory === 'All Categories' || 
      item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort the filtered inventory
  const sortedInventory = React.useMemo(() => {
    let sortableItems = [...filteredInventory];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredInventory, sortConfig]);

  // Pagination logic
  const paginatedInventory = sortedInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(sortedInventory.length / itemsPerPage);

  // Request sort
  const requestSort = (key: keyof typeof mockInventory[0]) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Get class for sort header
  const getSortDirectionIcon = (name: keyof typeof mockInventory[0]) => {
    if (!sortConfig || sortConfig.key !== name) {
      return null;
    }
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  // Low stock indicator
  const isLowStock = (item: typeof mockInventory[0]) => {
    return item.quantity <= item.minStock;
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Inventory Management</h1>
          <p className="text-gray-500">Manage and monitor your pharmaceutical inventory</p>
        </div>
        {isManagerOrAdmin && (
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button asChild>
              <Link to="/inventory/create">
                <Plus className="mr-2 h-4 w-4" />
                Add New Item
              </Link>
            </Button>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import CSV
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        )}
      </div>

      {/* Search and Filter Bar */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search by name, batch, supplier..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
              <Button variant="outline" className="px-3 flex-shrink-0">
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Inventory Items</CardTitle>
            <CardDescription>
              Showing {paginatedInventory.length} of {filteredInventory.length} items
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead 
                    className="cursor-pointer"
                    onClick={() => requestSort('name')}
                  >
                    Name {getSortDirectionIcon('name')}
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer"
                    onClick={() => requestSort('category')}
                  >
                    Category {getSortDirectionIcon('category')}
                  </TableHead>
                  <TableHead>Dosage & Form</TableHead>
                  <TableHead 
                    className="cursor-pointer text-right"
                    onClick={() => requestSort('quantity')}
                  >
                    Quantity {getSortDirectionIcon('quantity')}
                  </TableHead>
                  <TableHead>Batch No.</TableHead>
                  <TableHead 
                    className="cursor-pointer"
                    onClick={() => requestSort('expiryDate')}
                  >
                    Expires {getSortDirectionIcon('expiryDate')}
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer text-right"
                    onClick={() => requestSort('price')}
                  >
                    Unit Price {getSortDirectionIcon('price')}
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInventory.length > 0 ? (
                  paginatedInventory.map((item) => (
                    <TableRow 
                      key={item.id}
                      className={isLowStock(item) ? "bg-amber-50" : ""}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <span>{item.name}</span>
                          {isLowStock(item) && (
                            <Badge variant="outline" className="ml-2 bg-amber-50 text-amber-700 border-amber-200">
                              Low Stock
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.dosage} {item.form}</TableCell>
                      <TableCell className="text-right">
                        <span className={`font-medium ${isLowStock(item) ? "text-amber-700" : ""}`}>
                          {item.quantity}
                        </span>
                      </TableCell>
                      <TableCell>{item.batchNo}</TableCell>
                      <TableCell>{item.expiryDate}</TableCell>
                      <TableCell className="text-right">
                        ₵{item.price.toFixed(2)}
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
                              <Package className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Adjust Stock
                            </DropdownMenuItem>
                            {isManagerOrAdmin && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Item
                                </DropdownMenuItem>
                                {isAdmin && (
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                )}
                              </>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              History
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart2 className="mr-2 h-4 w-4" />
                              Analytics
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No inventory items found matching your search criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
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
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setCurrentPage(totalPages)}
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    </>
                  )}
                  
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryPage;