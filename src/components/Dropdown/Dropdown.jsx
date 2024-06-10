import React from "react";
// import MuiDropdown from "@mui/material/Dropdown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DropDown = ({ anchorEl, open, onClose, items }) => {
  const handleClickItem = (item) => () => {
    item.onClick();
    onClose();
  };

  return (
    // <MuiDropdown value={selected} onChange={(e) => console.log(e.target.value)}>
    //   <MenuButton>{title}</MenuButton>
    //   <Menu slots={{ listbox: Listbox }}>
    //     {items.map((item) => getMenuItem(item))}
    //   </Menu>
    // </MuiDropdown>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {items.map((item) => (
        <MenuItem onClick={handleClickItem(item)} key={item.id}>
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropDown;
