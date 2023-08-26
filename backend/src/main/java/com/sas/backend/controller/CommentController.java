package com.sas.backend.controller;

import com.sas.backend.dto.CommentDto;
import com.sas.backend.entity.Comment;
import com.sas.backend.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("")
    public ResponseEntity<Comment> createComment (@RequestBody CommentDto commentDto) {
        Comment comment = commentService.save(commentDto);
        return ResponseEntity.ok(comment);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @DeleteMapping("{commentId}")
    public ResponseEntity<?> deleteComment (@PathVariable Long commentId) {
        try {
            commentService.delete(commentId);
            return ResponseEntity.ok("Comment deleted");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<Comment>> getAllComments(){
        List<Comment> comments = commentService.getAllComments();
        //return new ResponseEntity<>(todos, HttpStatus.OK);
        return ResponseEntity.ok(comments);
    }

}
