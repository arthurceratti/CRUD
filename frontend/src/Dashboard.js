import React, { useState, useEffect } from 'react';
import { ButtonPrimary, ButtonSecondary } from './Buttons';
import './Dashboard.css';

function Dashboard() {
  console.log('Dashboard component rendered');
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUser({
        name: 'Ganso Doe',
        email: 'john.doe@example.com',
        role: 'Admin'
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <h2>CRUD App3</h2>
          </div>
          
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeTab === 'overview' ? 'active' : 'Ganso'}`}
              onClick={() => {
                setActiveTab('overview');
                console.log('Overview tab clicked');}
              }
            >
              📊 Overview
            </button>


            <button
              className={`nav-item ${activeTab === 'users' ? 'active' : 'Marreco'}`}
              onClick={() => setActiveTab('users')}
            >
              👥 Users
            </button>


            <button
              className={`nav-item ${activeTab === 'products' ? 'active' : 'Pato'}`}
              onClick={() => setActiveTab('products')}
            >
              📦 Products
            </button>


            <button
              className={`nav-item ${activeTab === 'settings' ? 'active' : 'Pombo'}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="main-header">
            <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">{user?.role}</span>
            </div>
          </div>

          <div className="main-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <div className="stats-grid">
                  <div className="stat-card">
                    <h3>Total Users</h3>
                    <p className="stat-value">128</p>
                    <span className="stat-change positive">+12% this week</span>
                  </div>
                  <div className="stat-card">
                    <h3>Total Products</h3>
                    <p className="stat-value">56</p>
                    <span className="stat-change positive">+5% this week</span>
                  </div>
                  <div className="stat-card">
                    <h3>Revenue</h3>
                    <p className="stat-value">$12,450</p>
                    <span className="stat-change positive">+8% this week</span>
                  </div>
                  <div className="stat-card">
                    <h3>Orders</h3>
                    <p className="stat-value">89</p>
                    <span className="stat-change negative">-3% this week</span>
                  </div>
                </div>

                <div className="content-grid">
                  <div className="content-card">
                    <h3>Recent Activity</h3>
                    <ul className="activity-list">
                      <li>User {user?.name} logged in</li>
                      <li>3 new products added</li>
                      <li>Updated user permissions</li>
                    </ul>
                  </div>
                  
                  <div className="content-card">
                    <h3>Quick Actions</h3>
                    <div className="quick-actions">
                      <ButtonPrimary onClick={() => setActiveTab('users')}>Manage Users</ButtonPrimary>
                      <ButtonSecondary onClick={() => setActiveTab('products')}>View Products</ButtonSecondary>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="users-content">
                <div className="users-header">
                  <div>
                    <h2>All Users</h2>
                    <p>Manage and view all registered users</p>
                  </div>
                  <ButtonPrimary>Add New User</ButtonPrimary>
                </div>
                <div className="users-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>Admin</td>
                        <td><span className="status-badge active">Active</span></td>
                        <td>
                          <ButtonSecondary size="sm">Edit</ButtonSecondary>
                          <ButtonSecondary size="sm">View</ButtonSecondary>
                        </td>
                      </tr>
                      <tr>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>User</td>
                        <td><span className="status-badge active">Active</span></td>
                        <td>
                          <ButtonSecondary size="sm">Edit</ButtonSecondary>
                          <ButtonSecondary size="sm">View</ButtonSecondary>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="products-content">
                <div className="products-header">
                  <div>
                    <h2>All Products</h2>
                    <p>View and manage all products</p>
                  </div>
                  <ButtonPrimary>Add New Product</ButtonPrimary>
                </div>
                <div className="products-grid">
                  <div className="product-card">
                    <div className="product-icon">📦</div>
                    <h3>Product 1</h3>
                    <p>Basic product description</p>
                    <div className="product-actions">
                      <ButtonSecondary size="sm">Edit</ButtonSecondary>
                      <ButtonSecondary size="sm">Delete</ButtonSecondary>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-icon">📦</div>
                    <h3>Product 2</h3>
                    <p>Another product description</p>
                    <div className="product-actions">
                      <ButtonSecondary size="sm">Edit</ButtonSecondary>
                      <ButtonSecondary size="sm">Delete</ButtonSecondary>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-icon">📦</div>
                    <h3>Product 3</h3>
                    <p>Third product description</p>
                    <div className="product-actions">
                      <ButtonSecondary size="sm">Edit</ButtonSecondary>
                      <ButtonSecondary size="sm">Delete</ButtonSecondary>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="settings-content">
                <div className="settings-header">
                  <div>
                    <h2>Settings</h2>
                    <p>Configure application settings</p>
                  </div>
                </div>
                <div className="settings-form">
                  <div className="form-group">
                    <label>Application Name</label>
                    <input type="text" defaultValue="CRUD App" />
                  </div>
                  <div className="form-group">
                    <label>Theme</label>
                    <select>
                      <option>Light</option>
                      <option>Dark</option>
                      <option>System</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Email Notifications</label>
                    <input type="checkbox" defaultChecked />
                  </div>
                  <ButtonPrimary>Save Settings</ButtonPrimary>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
