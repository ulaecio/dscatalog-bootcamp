package com.devsuperior.dscatalog.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.dscatalog.dto.CategoryDTO;
import com.devsuperior.dscatalog.services.CategoryService;

//Recursos Rest
@RestController //Realiza um pre-processamento antes do compilamento para o projeto funcionar corretamento
@RequestMapping(value = "/categories") /*Rotas Rest do recurso que geralmente são colocados no plural*/
public class CategoryResource {
	
	@Autowired //Injetar a dependencia automática
	private CategoryService service;
	
//Criação de endpoints CRUD (salvar, Deletar, buscar...)
	@GetMapping //Para configurar que esse método a seguir vai ser um webservice
	public ResponseEntity<List<CategoryDTO>>	findAll() {
		List<CategoryDTO> list = service.finAll();
		return ResponseEntity.ok().body(list);
	}
//Criação de endpoints CRUD (salvar, Deletar, buscar...)
	@GetMapping (value = "/{id}") //Para configurar que esse método a seguir vai ser um webservice
	public ResponseEntity<CategoryDTO>findById(@PathVariable Long id) {
		CategoryDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<CategoryDTO> insert(@RequestBody CategoryDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
		
	}
}
