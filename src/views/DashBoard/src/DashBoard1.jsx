import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes,Route } from "react-router-dom";
import Topbar from './scenes/global/Topbar'
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Side-bar"
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import Calendar from "./scenes/calendar" 
import FAQ from './scenes/faq'
import Bar from './scenes/bar'
import Pie from './scenes/pie'
import Line from './scenes/line'
import Geography from './scenes/geography' 



export default DashBoard1;
function DashBoard1() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '20%' }}> 
            <Sidebar />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          
            <Topbar />
            
            <main className="content">
              <Routes>
              <Route path='/' element={<Dashboard />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/invoices' element={<Invoices />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/bar' element={<Bar />}/>
        <Route path='/pie' element={<Pie />}/>
        <Route path='/line' element={<Line />}/>
        <Route path='/geography' element={<Geography />}/>
        
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

