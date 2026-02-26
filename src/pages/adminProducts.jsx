import React, { useState } from 'react';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const productStats = {
    total: 100,
    inStock: 75,
    lowStock: 15,
    outOfStock: 10
  };

  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: 'Long Bondpaper',
    category: 'BondPaper',
    size: 'A4',
    status: 'On-Hold',
    stock: 20,
    price: 250.00
  }));

  const navItems = [
    { label: 'Dashboard', icon: '⊞' },
    { label: 'Products', icon: '📦', active: true },
    { label: 'Orders', icon: '🛒' },
    { label: 'Blog Post', icon: '📝' },
    { label: 'Account Management', icon: '👤' },
    { label: 'Customer Reports', icon: '📊' },
    { label: 'Leadership Management', icon: '🏆' },
    { label: 'Backup & Recovery', icon: '💾' },
    { label: 'Activity Logs', icon: '📋' },
    { label: 'Settings', icon: '⚙️' },
  ];

  const toggleSelect = (id) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map(p => p.id));
    }
  };

  const getStatusStyle = (status) => {
    const styles = {
      'On-Hold': { background: '#FEF3C7', color: '#D97706', border: '1px solid #FCD34D' },
      'In Stock': { background: '#D1FAE5', color: '#059669', border: '1px solid #6EE7B7' },
      'Out of Stock': { background: '#FEE2E2', color: '#DC2626', border: '1px solid #FCA5A5' },
    };
    return styles[status] || styles['On-Hold'];
  };

  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F0F7F2', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: '242px',
        minWidth: '242px',
        background: '#fff',
        borderRight: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 24px 0', borderBottom: '1px solid #E5E7EB', paddingBottom: '16px' }}>
          <div style={{ fontWeight: 800, fontSize: '18px', color: '#155DFC', letterSpacing: '-0.5px' }}>
            JEM 8 CIRCLE
          </div>
          <div style={{ fontWeight: 700, fontSize: '15px', color: '#111827', marginTop: '12px' }}>Admin Panel</div>
          <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>Account Management System</div>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          {navItems.map((item) => (
            <div key={item.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              marginBottom: '2px',
              cursor: 'pointer',
              background: item.active ? '#155DFC' : 'transparent',
              color: item.active ? '#fff' : '#374151',
              fontSize: '13px',
              fontWeight: item.active ? 600 : 500,
              transition: 'all 0.15s ease',
            }}>
              <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Profile */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #2B7FFF, #9810FA)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: '13px', flexShrink: 0,
          }}>AD</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>Admin User</div>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>admin@company.com</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '28px 28px', overflowX: 'auto', minWidth: 0 }}>
        
        {/* Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111827', margin: 0 }}>List of Products</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '9px 18px', border: '1px solid #D1D5DB', borderRadius: '8px',
              background: '#fff', color: '#374151', fontSize: '13px', fontWeight: 500, cursor: 'pointer'
            }}>
              ↑ Export
            </button>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '9px 18px', border: 'none', borderRadius: '8px',
              background: '#155DFC', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer'
            }}>
              + Add Product
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' }}>
          {[
            { label: 'Total Product', value: productStats.total, color: '#EFF6FF', accent: '#2563EB', icon: '📦' },
            { label: 'In Stocks', value: productStats.inStock, color: '#ECFDF5', accent: '#059669', icon: '✅' },
            { label: 'Low Stocks', value: productStats.lowStock, color: '#FFFBEB', accent: '#D97706', icon: '⚠️' },
            { label: 'Out of Stock', value: productStats.outOfStock, color: '#FEF2F2', accent: '#DC2626', icon: '❌' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#fff', borderRadius: '12px', padding: '18px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            }}>
              <div>
                <div style={{ fontSize: '26px', fontWeight: 700, color: stat.accent }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>{stat.label}</div>
              </div>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'
              }}>{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Product Table Card */}
        <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
          
          {/* Search & Filter Bar */}
          <div style={{
            padding: '16px 20px', borderBottom: '1px solid #F3F4F6',
            display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center'
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              border: '1px solid #E5E7EB', borderRadius: '7px',
              padding: '7px 12px', background: '#F9FAFB', flex: '1', minWidth: '180px', maxWidth: '300px'
            }}>
              <span style={{ color: '#9CA3AF', fontSize: '14px' }}>🔍</span>
              <input
                type="text"
                placeholder="Search for Product"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '12px', width: '100%', color: '#374151' }}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{
                border: '1px solid #E5E7EB', borderRadius: '7px', padding: '7px 12px',
                background: '#F9FAFB', fontSize: '12px', color: '#374151', cursor: 'pointer', outline: 'none'
              }}
            >
              <option value="All">All Categories</option>
              <option value="BondPaper">BondPaper</option>
            </select>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              style={{
                border: '1px solid #E5E7EB', borderRadius: '7px', padding: '7px 12px',
                background: '#F9FAFB', fontSize: '12px', color: '#374151', cursor: 'pointer', outline: 'none'
              }}
            >
              <option value="A-Z">Sort By A-Z</option>
              <option value="Z-A">Sort By Z-A</option>
            </select>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSortOrder('A-Z'); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                border: '1px solid #E5E7EB', borderRadius: '7px', padding: '7px 12px',
                background: '#fff', fontSize: '12px', color: '#374151', cursor: 'pointer'
              }}
            >
              ✕ Clear
            </button>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', width: '40px' }}>
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === products.length}
                      onChange={toggleSelectAll}
                      style={{ cursor: 'pointer', width: '15px', height: '15px' }}
                    />
                  </th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Product</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Category</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Size/Color</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Status</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Stocks</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Price</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product.id} style={{
                    borderBottom: '1px solid #F3F4F6',
                    background: selectedProducts.includes(product.id) ? '#EFF6FF' : (index % 2 === 0 ? '#fff' : '#FAFAFA'),
                    transition: 'background 0.1s ease',
                  }}>
                    <td style={{ padding: '12px 16px' }}>
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleSelect(product.id)}
                        style={{ cursor: 'pointer', width: '15px', height: '15px' }}
                      />
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '8px',
                          background: '#F3F4F6', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                        }}>📄</div>
                        <span style={{ fontWeight: 500, color: '#111827', whiteSpace: 'nowrap' }}>{product.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#6B7280' }}>{product.category}</td>
                    <td style={{ padding: '12px 16px', color: '#6B7280' }}>{product.size}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        ...getStatusStyle(product.status),
                        padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
                        display: 'inline-block', whiteSpace: 'nowrap',
                      }}>
                        {product.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#374151', fontWeight: 500 }}>{product.stock}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#374151', fontWeight: 500 }}>₱{product.price.toFixed(2)}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <button style={{
                          padding: '5px 14px', borderRadius: '6px', border: '1px solid #D1D5DB',
                          background: '#fff', color: '#374151', fontSize: '12px', fontWeight: 500,
                          cursor: 'pointer',
                        }}>Edit</button>
                        <button style={{
                          padding: '5px 8px', borderRadius: '6px', border: '1px solid #FCA5A5',
                          background: '#FEF2F2', color: '#DC2626', fontSize: '13px',
                          cursor: 'pointer', lineHeight: 1,
                        }}>🗑</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div style={{
            padding: '14px 20px', borderTop: '1px solid #F3F4F6',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontSize: '12px', color: '#9CA3AF',
          }}>
            <span>Showing {filteredProducts.length} of {products.length} products</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[1, 2, 3].map(p => (
                <button key={p} style={{
                  width: '28px', height: '28px', borderRadius: '6px',
                  border: p === 1 ? 'none' : '1px solid #E5E7EB',
                  background: p === 1 ? '#155DFC' : '#fff',
                  color: p === 1 ? '#fff' : '#374151', fontSize: '12px', cursor: 'pointer', fontWeight: 500,
                }}>{p}</button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminProducts;