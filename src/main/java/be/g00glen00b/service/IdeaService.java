package be.g00glen00b.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import be.g00glen00b.model.Idea;

public interface IdeaService {

    List<Idea> getIdeas();

    @Transactional
    Idea addIdea(Idea idea);

    @Transactional
    Idea updateIdea(Idea idea);

    @Transactional
    void deleteIdea(Idea idea);
}
