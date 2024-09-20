import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Box, Container } from "@mui/material";
import Buttons from "./views/Buttons"; // Example views
import Inputs from "./views/Inputs";
import Dropdowns from "./views/Dropdowns";
import FileUpload from "./views/FileUpload";
import DragAndDrop from "./views/DragAndDrop";
import DatePickerView from "./views/DatePickerView";
import Tables from "./views/Table";
import Iframes from "./views/Iframes";
import Loaders from "./views/Loaders";
import Dialogs from "./views/Dialogs";
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-9KJKFZ4K7Q');
  const [currentView, setCurrentView] = useState("Dashboard");

  const renderView = () => {
    switch (currentView) {
      case "Buttons":
        return <Buttons />;
      case "Inputs":
        return <Inputs />;
      case "Dropdowns":
        return <Dropdowns />;
      case "File Upload":
        return <FileUpload />;
      case "Drag & Drop":
        return <DragAndDrop />;
      case "Date Picker":
        return <DatePickerView />;
      case "Tables":
        return <Tables />;
      case "Iframes":
        return <Iframes />;
      case "Loaders":
        return <Loaders />;
      case "Dialogs":
        return <Dialogs />;
      default:
        return <Buttons />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelectView={setCurrentView} style={{ width: '250px' }} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `250px` }}>
        <Container>{renderView()}</Container>
      </Box>
    </div>
  );
}

export default App;
