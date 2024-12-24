"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

import { Project } from "@/libs";
import { ProjectDetail } from "@/components";

interface GlobalContextType {
  showSnackbar: (
    message: string,
    severity: "success" | "error" | "info" | "warning"
  ) => void;
  openProjectModal: (project: Project) => void;
  closeProjectModal: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // Snackbar State
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  const showSnackbar = (
    message: string,
    severity: "success" | "error" | "info" | "warning"
  ) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Project Modal State
  const [project, setProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setProject(project);
  };

  const closeProjectModal = () => {
    setProject(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        showSnackbar,
        openProjectModal,
        closeProjectModal,
      }}
    >
      {children}

      {/* Snackbar Component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={handleSnackbarClose}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Project Detail Modal */}
      {project &&  <ProjectDetail project={project} onClose={closeProjectModal} />}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
