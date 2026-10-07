// The root filesystem location
export const diskImageUrl = IMAGE_URL;
// The root filesystem backend type
export const diskImageType = "github";
// Print an introduction message about the technology
export const printIntro = false;

export const needsDisplay = true;

// Executable full path (Required)
export const cmd = "/usr/bin/openbox-session";
// Arguments, as an array (Required)
export const args = ARGS; // Default: ["--login"];
// Optional extra parameters
export const opts = {
	// Environment variables - include DISPLAY mapping for Xorg to find the frame buffer
	env: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C", "DISPLAY=:0"], 
	// Current working directory
	cwd: CWD, // Default: "/home/user",
	// User id
	uid: 1000,
	// Group id
	gid: 1000
};
