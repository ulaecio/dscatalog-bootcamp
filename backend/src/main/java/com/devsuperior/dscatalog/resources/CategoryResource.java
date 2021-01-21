package com.devsuperior.dscatalog.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dscatalog.entities.Category;

//Recursos Rest
@RestController //Realiza um pre-processamento antes do compilamento para o projeto funcionar corretamento
@RequestMapping(value = "/categories") /*Rotas Rest do recurso que geralmente são colocados no plural*/
public class CategoryResource {
	
//Criação de endpoints para(salvar, Deletar, buscar...)
	@GetMapping //Para configurar que esse método a seguir vai ser um webservice
	public ResponseEntity<List<Category>>	findAll() {
		List<Category> list = new ArrayList<>();
		list.add(new Category(1L, "Books"));
		list.add(new Category(2L, "Eletronics"));
		return ResponseEntity.ok().body(list);
	}
}
