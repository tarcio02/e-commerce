import * as S from './styles'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../layout/SidebarAdmin";
import { Toaster } from 'sonner';

const AdminLayout = () => {
    return (
        <S.Container>
            <Toaster richColors position="bottom-right" />
            <Sidebar />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.Container>
    )
}

export default AdminLayout