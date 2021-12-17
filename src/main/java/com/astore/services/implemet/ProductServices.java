package com.astore.services.implemet;

import com.astore.dao.implement.ProductDao;
import com.astore.model.Product;
import com.astore.services.IProductServices;

import java.util.List;

public class ProductServices implements IProductServices {
    private  ProductDao p ;

    public ProductServices() {
        this.p = new ProductDao();
    }

    @Override
    public boolean insert(Product product) {
        return p.insert(product);
    }

    @Override
    public boolean update(Product product) {
        return  p.edit(product);
    }

    @Override
    public boolean delete(int id) {
        return  p.delete(id);
    }

    @Override
    public Product getById(int id) {
       return p.getById(id);
    }

    @Override
    public List<Product> getByName(String name) {
       return p.getByName(name);
    }

    @Override
    public List<Product> getAll() {
        return p.getAll();
    }


    @Override
    public List<Product> getProductByIdCate(int idCate) {
        return p.getProductByIdCate(idCate);
    }

    @Override
    public List<Product> getProductByIdDongSp(int idDongSp) {
        return p.getProductByIdDongSp(idDongSp);
    }

    @Override
    public List<Product> getProductByIdCate(int idCate, int numTop) {
        return p.getProductByIdCate(idCate,numTop);
    }


    @Override
    public List<Product> getProductByIdDongSp(int idDongSp, int numTop) {
        return p.getProductByIdDongSp(idDongSp,numTop);
    }

    @Override
    public List<Product> getProductByIdCate(int idCate, int start, int end) {
        return p.getProductByIdCate(idCate,start, end);
    }
}
