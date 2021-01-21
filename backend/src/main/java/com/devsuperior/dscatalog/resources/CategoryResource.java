package com.devsuperior.dscatalog.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.services.CategoryService;

//Recursos Rest
@RestController //Realiza um pre-processamento antes do compilamento para o projeto funcionar corretamento
@RequestMapping(value = "/categories") /*Rotas Rest do recurso que geralmente são colocados no plural*/
public class CategoryResource {
	
	@Autowired //Injetar a dependencia automática
	private CategoryService service;
	
//Criação de endpoints CRUD (salvar, Deletar, buscar...)
	@GetMapping //Para configurar que esse método a seguir vai ser um webservice
	public ResponseEntity<List<Category>>	findAll() {
		List<Category> list = service.finAll();
		return ResponseEntity.ok().body(list);
	}
}
