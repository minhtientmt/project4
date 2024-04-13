import './App.css';

import React from "react";
import { Grid, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = () => {
  // Dữ liệu mẫu cho người dùng và hình ảnh
  const users = [
    { id: 1, name: "User 1", email: "user1@example.com", address: "123 Street" },
    { id: 2, name: "User 2", email: "user2@example.com", address: "456 Street" },
    // Thêm người dùng khác nếu cần
  ];

  const photos = [
    { id: 1, userId: 1, url: "https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-42.jpg", createdAt: "2024-04-01", comments: [{ id: 1, userId: 1, text: "Comment 1", createdAt: "2024-04-02" }] },
    { id: 2, userId: 1, url: "https://th.bing.com/th/id/R.cdfda7d5dc83eb0c1272d74c3404413a?rik=JjhAnlDxXVj4FA&pid=ImgRaw&r=0", createdAt: "2024-04-03", comments: [{ id: 2, userId: 2, text: "Comment 2", createdAt: "2024-04-04" }] },
    // Thêm ảnh khác nếu cần
  ];

  return (
    <Router>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopBar />
          </Grid>
          <div className="main-topbar-buffer" />
          <Grid item sm={3}>
            <Paper className="main-grid-item">
              <UserList users={users} />
            </Paper>
          </Grid>
          <Grid item sm={9}>
            <Paper className="main-grid-item">
              <Routes>
                <Route path="/users/:userId" element={<UserDetail users={users} photos={photos} />} />
                <Route path="/photos/:userId" element={<UserPhotos photos={photos} />} />
                <Route path="/users" element={<UserList users={users} />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;