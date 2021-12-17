package com.astore.controller;

import com.astore.model.Product;
import com.astore.services.implemet.ProductServices;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "index", value = "")
public class Index extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductServices ps = new ProductServices();
        List<Product> ip = ps.getProductByIdCate(1,4);
        List<Product> mac = ps.getProductByIdCate(2,4);
        List<Product> ipad = ps.getProductByIdCate(3,4);
        List<Product> watch= ps.getProductByIdCate(4,4);


        request.setAttribute("iphone", ip);
        request.setAttribute("mac", mac);
        request.setAttribute("watch", watch);
        request.setAttribute("ipad", ipad);
        response.setContentType("text/html");


        request.getRequestDispatcher("index.jsp").forward(request, response);

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        doGet(request, response);
    }
}
