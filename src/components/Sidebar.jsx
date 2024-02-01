import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Category } from "@mui/icons-material";

const Sidebar = ({selectedCategory, setSelectedCategory} ) => 
   (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto", height: {
            sx: 'auto', md: '95%'
        }, flexDirection: { md: 'column' },
        backgroundColor: '#191a1a',
    }}>
        
        
        {categories.map((Category) => (

            <button className="category-btn" 
            onClick={() => setSelectedCategory (Category.name)}
            style={{
                background: Category.name === selectedCategory && '#FC1503', color: 'white',  whiteSpace: 'nowrap', // Prevent text wrapping
                overflow: 'hidden !important', // Hide overflow text
  textOverflow: 'ellipsis !important',
 
                textOverflow: 'ellipsis', // Display ellipsis for overflow text
              
            }} key={Category.name}>
                <span style={{ color: Category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{Category.icon}</span>
                <span style={{ opacity: Category.name === selectedCategory ? '1' : '0.8' }}>{Category.name}</span>
            </button>
        )  )}        
        
        </Stack>
  )


export default Sidebar