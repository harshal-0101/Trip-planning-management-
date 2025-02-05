import "./Practice.css"

function Profile() {
  return (
    <div className="container">
      <header className="header">
        <select defaultValue="my-account">
          <option value="my-account">My Account</option>
        </select>
        <span>My Profile</span>
      </header>

      <div className="sidebar">
        <div className="profile-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="nav-item active">Profile</div>
        <div className="nav-item">Login Details</div>
        <div className="nav-item">Co-Travellers</div>
        <div className="nav-item">Logged In Devices</div>
        <div className="nav-item">Logout</div>
      </div>

      <main className="main-content">
        <section className="progress-section">
          <h3>Complete your Profile</h3>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p>Get the best out of MakeMyTrip by adding the remaining details!</p>

          <div className="status-indicators">
            <div className="status-item">
              <span className="status-icon">✓</span>
              <span>Verified Email ID</span>
            </div>
            <div className="status-item">
              <span className="status-icon">+</span>
              <span>Add your mobile number</span>
            </div>
            <div className="status-item">
              <span className="status-icon">i</span>
              <span>Complete Basic Info</span>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <div>
              <h2>Profile</h2>
              <p>Basic info, for a faster booking experience</p>
            </div>
            <button className="edit-button">EDIT</button>
          </div>

          <div className="form-group">
            <label>NAME</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>BIRTHDAY</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>GENDER</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>MARITAL STATUS</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>YOUR ADDRESS</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>PINCODE</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>STATE</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add
              </a>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <div>
              <h2>Login Details</h2>
              <p>Manage your mobile number, email address and password</p>
            </div>
          </div>

          <div className="form-group">
            <label>MOBILE NUMBER</label>
            <div className="value">
              <span>Not Added</span>
              <a href="#" className="add-link">
                + Add your mobile number
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>EMAIL ID</label>
            <div className="value">
              <span>vc105264@gmail.com</span>
              <span className="verified-tag">
                <span className="status-icon">✓</span>
                Verified
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>PASSWORD</label>
            <div className="value">
              <span>••••••</span>
              <a href="#" className="add-link">
                Change Password?
              </a>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <div>
              <h2>Co-Travellers</h2>
              <p>Add, Remove and Update your traveller list</p>
            </div>
            <button className="edit-button">ADD TRAVELLER</button>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <div>
              <h2>Logged In Devices</h2>
              <p>Check all the devices where your account is logged in</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile