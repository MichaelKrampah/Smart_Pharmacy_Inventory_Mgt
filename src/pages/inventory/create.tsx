import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Clipboard, Package, Save } from 'lucide-react';

// Medicine categories for form
const categories = [
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

// Medicine forms
const medicineForms = [
  'Tablet',
  'Capsule',
  'Syrup',
  'Injection',
  'Inhaler',
  'Cream',
  'Ointment',
  'Gel',
  'Solution',
  'Suspension',
  'Drops',
  'Powder',
];

// List of suppliers
const suppliers = [
  'MedSource Inc',
  'HeartMeds',
  'DiaboCare',
  'GenericMeds',
  'RespiCare',
  'PharmaPlus',
  'GlobalHealth',
  'MediWholesale',
  'PharmSupply Inc',
  'HealthStock Ltd',
];

// Mock database of products that can be identified by barcode
const barcodeDatabase = [
  {
    barcode: '9781234567897',
    name: 'Amoxicillin',
    category: 'Antibiotics',
    dosage: '500mg',
    form: 'Tablet',
    description: 'Broad-spectrum antibiotic used to treat bacterial infections',
    supplier: 'MedSource Inc',
    price: '8.99',
    costPrice: '5.50',
  },
  {
    barcode: '9780123456789',
    name: 'Lisinopril',
    category: 'Antihypertensive',
    dosage: '10mg',
    form: 'Tablet',
    description: 'ACE inhibitor used to treat high blood pressure and heart failure',
    supplier: 'HeartMeds',
    price: '12.50',
    costPrice: '7.25',
  },
  {
    barcode: '9783210987654',
    name: 'Metformin',
    category: 'Antidiabetic',
    dosage: '1000mg',
    form: 'Tablet',
    description: 'First-line medication for type 2 diabetes',
    supplier: 'DiaboCare',
    price: '10.75',
    costPrice: '6.30',
  },
];

const CreateInventoryItem: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    dosage: '',
    form: '',
    description: '',
    quantity: '',
    minStock: '',
    batchNo: '',
    expiryDate: '',
    location: '',
    supplier: '',
    price: '',
    costPrice: '',
    barcode: '',
    notes: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Generate a batch number
  const generateBatchNo = () => {
    if (!formData.name) {
      toast({
        title: "Product name required",
        description: "Please enter a product name first to generate a batch number.",
        variant: "destructive",
      });
      return;
    }
    
    const prefix = formData.name.substring(0, 3).toUpperCase();
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    
    const batchNo = `${prefix}${year}-${month}-${randomNum}`;
    setFormData(prev => ({ ...prev, batchNo }));
  };

  // Simulate fetching product by barcode
  const fetchProductByBarcode = (barcode: string) => {
    if (!barcode) return;
    
    // Find product in mock database
    const product = barcodeDatabase.find(item => item.barcode === barcode);
    
    if (product) {
      // Update form with product data
      setFormData(prev => ({ 
        ...prev, 
        ...product,
        // Keep existing quantity, minStock, batchNo, expiryDate, location if already entered
        quantity: prev.quantity || '',
        minStock: prev.minStock || '',
        batchNo: prev.batchNo || '',
        expiryDate: prev.expiryDate || '',
        location: prev.location || '',
      }));
      
      setScanMessage({ 
        type: 'success', 
        message: `Product "${product.name}" found and form populated.` 
      });
      
      // Generate a default batch number if none exists
      if (!formData.batchNo) {
        generateBatchNo();
      }
      
      // Set a default expiry date if none exists (2 years from now)
      if (!formData.expiryDate) {
        const twoYearsFromNow = new Date();
        twoYearsFromNow.setFullYear(twoYearsFromNow.getFullYear() + 2);
        const formattedDate = twoYearsFromNow.toISOString().split('T')[0];
        setFormData(prev => ({ ...prev, expiryDate: formattedDate }));
      }
    } else {
      setScanMessage({ 
        type: 'error', 
        message: `No product found with barcode ${barcode}. Please enter details manually.` 
      });
    }
  };

  // Initiate scanning
  const initiateScan = () => {
    setIsScanning(true);
    setScanMessage(null);
    
    // Simulate camera scanning process
    setTimeout(() => {
      setIsScanning(false);
      
      // Randomly select a product from the database to simulate scan
      const randomIndex = Math.floor(Math.random() * barcodeDatabase.length);
      const scannedProduct = barcodeDatabase[randomIndex];
      
      // Update barcode field and fetch the product data
      setFormData(prev => ({ ...prev, barcode: scannedProduct.barcode }));
      fetchProductByBarcode(scannedProduct.barcode);
      
      toast({
        title: "Barcode scanned successfully",
        description: `Found product: ${scannedProduct.name}`,
      });
    }, 3000);
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Form validation
    if (!formData.name || !formData.category || !formData.dosage || !formData.form || 
        !formData.quantity || !formData.minStock || !formData.batchNo || !formData.expiryDate || 
        !formData.supplier || !formData.price) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API call to create inventory item
    setTimeout(() => {
      toast({
        title: "Inventory item created",
        description: `${formData.name} has been added to inventory successfully.`,
      });
      setIsLoading(false);
      navigate('/inventory');
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          className="mr-2" 
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Add New Inventory Item</h1>
      </div>
      
      {/* Add Barcode/RFID Scanner Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M3 5v14"></path>
              <path d="M8 5v14"></path>
              <path d="M12 5v14"></path>
              <path d="M17 5v14"></path>
              <path d="M21 5v14"></path>
            </svg>
            Scan Barcode/RFID
          </CardTitle>
          <CardDescription>Quickly add inventory by scanning barcode or RFID tag</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="barcodeInput">Enter Barcode/RFID or Scan</Label>
              <div className="flex gap-2">
                <Input 
                  id="barcodeInput" 
                  placeholder="Scan or enter barcode/RFID" 
                  className="flex-1"
                  value={formData.barcode}
                  onChange={(e) => {
                    handleChange(e);
                    // Auto-submit if the barcode length is valid
                    if (e.target.value.length >= 10) {
                      fetchProductByBarcode(e.target.value);
                    }
                  }}
                  name="barcode"
                />
                <Button 
                  type="button" 
                  onClick={() => fetchProductByBarcode(formData.barcode)}
                  disabled={!formData.barcode}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  Search
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button 
                type="button" 
                className="h-full w-full" 
                variant="outline"
                onClick={initiateScan}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="M2 8h20"></path>
                </svg>
                Start Scanner
              </Button>
            </div>
          </div>
          
          {isScanning && (
            <div className="mt-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-full h-1 bg-blue-500 rounded"></div>
                  <p className="mt-4 text-gray-500">
                    Position barcode within the scanner area...
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {scanMessage && (
            <div className={`mt-4 p-3 rounded ${scanMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {scanMessage.message}
            </div>
          )}
        </CardContent>
      </Card>
      
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5" />
                Basic Information
              </CardTitle>
              <CardDescription>Enter the basic details of the medication</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Medication Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="e.g., Amoxicillin"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange('category', value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage *</Label>
                  <Input 
                    id="dosage" 
                    name="dosage" 
                    value={formData.dosage} 
                    onChange={handleChange} 
                    placeholder="e.g., 500mg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form">Form *</Label>
                  <Select
                    value={formData.form}
                    onValueChange={(value) => handleSelectChange('form', value)}
                  >
                    <SelectTrigger id="form">
                      <SelectValue placeholder="Select form" />
                    </SelectTrigger>
                    <SelectContent>
                      {medicineForms.map((form) => (
                        <SelectItem key={form} value={form}>
                          {form}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  placeholder="Brief description of the medication"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Inventory Details */}
          <Card>
            <CardHeader>
              <CardTitle>Inventory Details</CardTitle>
              <CardDescription>Specify stock levels and inventory locations</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Current Quantity *</Label>
                  <Input 
                    id="quantity" 
                    name="quantity" 
                    type="number" 
                    min="0" 
                    value={formData.quantity} 
                    onChange={handleChange} 
                    placeholder="e.g., 100"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minStock">Minimum Stock Level *</Label>
                  <Input 
                    id="minStock" 
                    name="minStock" 
                    type="number" 
                    min="0" 
                    value={formData.minStock} 
                    onChange={handleChange} 
                    placeholder="e.g., 20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Storage Location</Label>
                  <Input 
                    id="location" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="e.g., Shelf A-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="batchNo">Batch Number *</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="batchNo" 
                      name="batchNo" 
                      value={formData.batchNo} 
                      onChange={handleChange} 
                      placeholder="e.g., AMX2023-05"
                      className="flex-1"
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={generateBatchNo}
                    >
                      <Clipboard className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input 
                    id="expiryDate" 
                    name="expiryDate" 
                    type="date" 
                    value={formData.expiryDate} 
                    onChange={handleChange} 
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supplier & Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Supplier & Pricing</CardTitle>
              <CardDescription>Enter supplier and pricing information</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="supplier">Supplier *</Label>
                  <Select
                    value={formData.supplier}
                    onValueChange={(value) => handleSelectChange('supplier', value)}
                  >
                    <SelectTrigger id="supplier">
                      <SelectValue placeholder="Select supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      {suppliers.map((supplier) => (
                        <SelectItem key={supplier} value={supplier}>
                          {supplier}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="barcode">Barcode / SKU</Label>
                  <Input 
                    id="barcode" 
                    name="barcode" 
                    value={formData.barcode} 
                    onChange={handleChange} 
                    placeholder="e.g., 978020137962"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="costPrice">Cost Price</Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₵</span>
                    <Input 
                      id="costPrice" 
                      name="costPrice" 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={formData.costPrice} 
                      onChange={handleChange} 
                      placeholder="0.00"
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Selling Price *</Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₵</span>
                    <Input 
                      id="price" 
                      name="price" 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={formData.price} 
                      onChange={handleChange} 
                      placeholder="0.00"
                      className="pl-8"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleChange} 
                  placeholder="Any additional notes or special instructions"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/inventory')} 
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? 'Saving...' : 'Save Inventory Item'}
          </Button>
        </div>
      </form>
    </div>
  );
};

// Create a namespace object for Inventory components
const Inventory = {
  Create: CreateInventoryItem,
  Edit: CreateInventoryItem, // Reusing the same component for now
};

export const Create = CreateInventoryItem;
export const Edit = CreateInventoryItem;

export default Inventory;