import {Box, useTheme,Typography} from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {tokens} from '../../theme'

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Box m="20px" marginTop="80px">
        <Header title="Q&A" subtitle="Frequently Asked Question Page" />
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              How to Manage User Accounts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As an administrator, you can manage user accounts by accessing the Admin Panel. In the Admin Panel, you can view and edit user profiles, reset passwords, and manage user permissions.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Adding New Books to the Store
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To add new books to the store, go to the Dashboard and click on "Add New Book". Fill in the required details such as title, author, price, description, etc. Upload the book cover image and click on "Create New Book" to add it to the store.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Managing Orders and Sales
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In the Admin Panel, you can view and manage customer orders. You can mark orders as "Shipped" or "Delivered", and also view the sales report to track the overall sales performance.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Handling Customer Support Tickets
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As an administrator, you can access and respond to customer support tickets. Navigate to the Support section in the Admin Panel to view and address customer inquiries and issues.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Managing Site Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can customize various site settings in the Admin Panel. Modify site information, update contact details, and manage site policies like terms of service and privacy policy from the Settings section.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };
  
  export default FAQ;
  