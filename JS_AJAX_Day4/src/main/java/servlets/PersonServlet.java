package servlets;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Person;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "PersonServlet", urlPatterns = {"/PersonServlet"})
public class PersonServlet extends HttpServlet {

    private static List<Person> list = new ArrayList();
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public PersonServlet() {
        list.add(new Person("Andrian", "Vangelov", "52987654"));
        list.add(new Person("Alexandar", "Osenov", "52903704"));
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            if(request != null) {
            String fName = request.getParameter("fname");
            String lName = request.getParameter("lName");
            String phone = request.getParameter("phone");
            list.add(new Person(fName, lName, phone));
            response.sendRedirect("person.html");
            }
            out.println(gson.toJson(list));
            
            
        } catch (Exception e) {
        
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
